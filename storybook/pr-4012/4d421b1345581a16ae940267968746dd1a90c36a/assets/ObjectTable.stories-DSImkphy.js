import{j as i}from"./iframe-DMskF-Tm.js";import{O as p}from"./object-table-WoGqcip2.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C9m-nPhr.js";import"./preload-helper-zdHiINLH.js";import"./Table-Bkp_2Snu.js";import"./index-DLe4u5Oe.js";import"./Dialog-DHH8wSIe.js";import"./cross-CwAqVkgp.js";import"./svgIconContainer-CNoR15u0.js";import"./useBaseUiId-IzXs79SE.js";import"./InternalBackdrop-BbQxkn3u.js";import"./composite-bCuvd1w6.js";import"./index-BQNk_jze.js";import"./index-1EVlbohU.js";import"./index-BS55zaCl.js";import"./useEventCallback-DVDdrM3Z.js";import"./SkeletonBar-BdaE-4d-.js";import"./LoadingCell-TanHUCuh.js";import"./ColumnConfigDialog-BmK0FFPZ.js";import"./DraggableList-DdJdey2g.js";import"./search-CZUSf-yV.js";import"./Input-D-LAYNYb.js";import"./useControlled-CLoeMU3z.js";import"./Button-BNzcwfr4.js";import"./small-cross-BYWrk9uQ.js";import"./ActionButton-WEyIvEvK.js";import"./Checkbox-msJ9Xjhm.js";import"./useValueChanged-BLXHgZ07.js";import"./CollapsiblePanel-DQIxvF0N.js";import"./MultiColumnSortDialog-t1cg3wy1.js";import"./MenuTrigger-BochQ1EN.js";import"./CompositeItem-BdlugdAy.js";import"./ToolbarRootContext-Br2QKeOd.js";import"./getDisabledMountTransitionStyles-CoA3FrXT.js";import"./getPseudoElementBounds-cZixjbuq.js";import"./chevron-down-D2q20rMp.js";import"./index-BKGUEF_C.js";import"./error-pEWPvW42.js";import"./BaseCbacBanner-DRtxjRMH.js";import"./makeExternalStore-TRQMkypD.js";import"./Tooltip-kEiuDs1k.js";import"./PopoverPopup-BtNKZ5QB.js";import"./debounce-Dl0Z3g8R.js";import"./useOsdkClient-C_CyCy1E.js";import"./tick-CEX6N7wE.js";import"./DropdownField-DAhq5OSj.js";import"./isEqual-C098p3mp.js";import"./withOsdkMetrics-Dwd24s1O.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
