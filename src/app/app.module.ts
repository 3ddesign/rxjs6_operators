import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RangeComponent } from './operators/range/range.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { OfComponent } from './operators/of/of.component';
import { FromComponent } from './operators/from/from.component';
import { IntervalComponent } from './operators/interval/interval.component';
import { EmptyComponent } from './operators/empty/empty.component';
import { MaptoComponent } from './operators/mapto/mapto.component';
import { FilterComponent } from './operators/filter/filter.component';
import { DoComponent } from './operators/do/do.component';
import { PluckComponent } from './operators/pluck/pluck.component';
import { FirstComponent } from './operators/first/first.component';
import { StartWithComponent } from './operators/start-with/start-with.component';
import { CreateComponent } from './operators/create/create.component';
import { EveryComponent } from './operators/every/every.component';
import { DistinctUntilChangedComponent } from './operators/distinct-until-changed/distinct-until-changed.component';
import { DefaultIfEmptyComponent } from './operators/default-if-empty/default-if-empty.component';
import { DelayComponent } from './operators2/delay/delay.component';
import { TakeComponent } from './operators2/take/take.component';
import { ThrowComponent } from './operators2/throw/throw.component';
import { UtilityComponent } from './operators2/utility/utility.component';
import { SkipComponent } from './operators2/skip/skip.component';
import { LastComponent } from './operators2/last/last.component';
import { ConcatComponent } from './operators2/concat/concat.component';
import { ConcatallComponent } from './operators2/concatall/concatall.component';
import { ConcatmapComponent } from './operators2/concatmap/concatmap.component';
import { SingleComponent } from './operators2/single/single.component';
import { IgnoreComponent } from './operators2/ignore/ignore.component';
import { SampleComponent } from './operators2/sample/sample.component';
import { ScanComponent } from './operators2/scan/scan.component';
import { GrupbyComponent } from './operators2/grupby/grupby.component';
import { TimeoutComponent } from './operators2/timeout/timeout.component';
import { MergeComponent } from './operators2/merge/merge.component';
import { BufferComponent } from './operators2/buffer/buffer.component';
import { ThrottleComponent } from './operators2/throttle/throttle.component';
import { ZipComponent } from './operators3/zip/zip.component';
import { CombineleastComponent } from './operators3/combineleast/combineleast.component';
import { ForkjoinComponent } from './operators3/forkjoin/forkjoin.component';
import { RaceComponent } from './operators3/race/race.component';
import { RetryComponent } from './operators3/retry/retry.component';
import { LatestfromComponent } from './operators3/latestfrom/latestfrom.component';
import { WindowComponent } from './operators3/window/window.component';
import { LetComponent } from './operators3/let/let.component';
import { DebounceComponent } from './operators3/debounce/debounce.component';
import { SubjectComponent } from './subjects/subject/subject.component';
import { BehaviorComponent } from './subjects/behavior/behavior.component';
import { ReplaysubjectComponent } from './subjects/replaysubject/replaysubject.component';
import { AsyncsubjectComponent } from './subjects/asyncsubject/asyncsubject.component';
import { SwitchmapComponent } from './operators2/switchmap/switchmap.component';
import { AuditComponent } from './operators2/audit/audit.component';
import { SequenceEqualComponent } from './operators/sequence-equal/sequence-equal.component';

@NgModule({
  declarations: [
    AppComponent,
    RangeComponent,
    OfComponent,
    FromComponent,
    IntervalComponent,
    EmptyComponent,
    MaptoComponent,
    FilterComponent,
    DoComponent,
    PluckComponent,
    FirstComponent,
    StartWithComponent,
    CreateComponent,
    EveryComponent,
    DistinctUntilChangedComponent,
    DefaultIfEmptyComponent,
    DelayComponent,
    TakeComponent,
    ThrowComponent,
    UtilityComponent,
    SkipComponent,
    LastComponent,
    ConcatComponent,
    ConcatallComponent,
    ConcatmapComponent,
    SingleComponent,
    IgnoreComponent,
    SampleComponent,
    ScanComponent,
    GrupbyComponent,
    TimeoutComponent,
    MergeComponent,
    BufferComponent,
    ThrottleComponent,
    ZipComponent,
    CombineleastComponent,
    ForkjoinComponent,
    RaceComponent,
    RetryComponent,
    LatestfromComponent,
    WindowComponent,
    LetComponent,
    DebounceComponent,
    SubjectComponent,
    BehaviorComponent,
    ReplaysubjectComponent,
    AsyncsubjectComponent,
    SwitchmapComponent,
    AuditComponent,
    SequenceEqualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
