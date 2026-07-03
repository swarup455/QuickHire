import { Card, CardContent } from "@/components/ui/card";
import useCountUp from "@/hooks/useCountUp";

const StatsCard = ({ icon: Icon, value, suffix = "", description }) => {
    const count = useCountUp(value);

    return (
        <Card className="h-full w-full border-zinc-800 bg-zinc-900/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10">
            <CardContent className="flex h-full flex-col items-center justify-center px-6 py-6 text-center">
                <div className="mb-4 rounded-2xl bg-indigo-500/10 p-3.5 text-indigo-400">
                    <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-3xl font-bold text-white">
                    {count.toLocaleString()}
                    {suffix}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
};

export default StatsCard;