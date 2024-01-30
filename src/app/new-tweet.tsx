"use client";

import { mergeClassname } from "@/utils/merge-classname";
import { useForm, SubmitHandler } from "react-hook-form";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { FC, useState } from "react";
import toast from "react-hot-toast";

type Inputs = {
  text: string;
};

interface Props {
  disabled?: boolean;
}

const NewTweet: FC<Props> = ({ disabled }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isValid },
  } = useForm<Inputs>();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    toast.promise(
      axios
        .post("/api/tweet", data)
        .then((res) => {
          reset();
          return res.data.id;
        })
        .finally(() => {
          setLoading(false);
        }),
      {
        loading: "Mengirim tweet...",
        success: (id) => (
          <span>
            Tweet berhasil dikirim.{" "}
            <a
              href={`https://twitter.com/i/web/status/${id}`}
              target="_blank"
              rel="noreferrer"
              className="text-primary"
            >
              Lihat tweet
            </a>
          </span>
        ),
        error: "Tweet gagal dikirim.",
      },
      {
        success: {
          duration: 10000,
        },
      }
    );
  };
  const limit_1 = 260;
  const limit_2 = 280;
  const textLength = watch("text")?.length ?? 0;
  const progress =
    textLength < limit_1
      ? Math.floor((textLength / limit_1) * 97)
      : Math.floor(((textLength - limit_1) / 20) * 100);

  return (
    <form
      className="w-full p-4 sm:p-6 bg-base-100 rounded-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="prose">
        <h3>Fess Baru</h3>
        <textarea
          className="textarea textarea-bordered w-full text-lg"
          placeholder="Tulis tweet disini"
          rows={6}
          required
          disabled={loading || disabled}
          {...register("text", { required: true, maxLength: limit_2 })}
        ></textarea>
        <div className="flex justify-end gap-2 items-center mt-2">
          <div
            className={mergeClassname(
              "radial-progress bg-base-200 mt-0.5",
              textLength >= limit_2
                ? "text-error"
                : textLength >= limit_1
                ? "text-warning"
                : "text-success"
            )}
            style={{
              // @ts-ignore
              "--value": progress,
              "--size": textLength < limit_1 ? "1.5rem" : "1.75rem",
              "--thickness": "2px",
            }}
            role="progressbar"
          >
            {textLength < limit_1 ? null : (
              <div className="text-xs text-black">{limit_2 - textLength}</div>
            )}
          </div>
          <button
            className="btn btn-primary btn-sm"
            type="submit"
            disabled={!isValid || loading || disabled}
          >
            <PaperAirplaneIcon className="h-4 w-4" />
            Kirim
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewTweet;
