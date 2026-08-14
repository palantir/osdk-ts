import{j as i}from"./iframe-BKIDvt-K.js";import{O as p}from"./object-table-BHTV2P9z.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BG-J9gxp.js";import"./preload-helper-mI3tBMWP.js";import"./Table-DkpSR35_.js";import"./index-CrGl0mKT.js";import"./Dialog-DFWmCx4e.js";import"./cross-ZQbGVcUs.js";import"./svgIconContainer-DPW23OxO.js";import"./useBaseUiId-C9o0bL4p.js";import"./InternalBackdrop-5RCVmnT-.js";import"./composite-CQudhTJ9.js";import"./index-CC4pQ_7y.js";import"./index-DDZLkqmq.js";import"./index-CFReLSn_.js";import"./useEventCallback-ldBmTO9w.js";import"./SkeletonBar-CpXeghMb.js";import"./LoadingCell-BlJ8VdtH.js";import"./ColumnConfigDialog-n3ZPbTPe.js";import"./DraggableList-90FoAimS.js";import"./search-D85PJwgE.js";import"./Input-CEoxDAhD.js";import"./useControlled-BJ__83MY.js";import"./Button-DQ9OY2hI.js";import"./small-cross-DkHYyVsX.js";import"./ActionButton-C31vbNq1.js";import"./Checkbox-DL1FpdO7.js";import"./useValueChanged-DSjkwF1h.js";import"./CollapsiblePanel-ByITDqAC.js";import"./MultiColumnSortDialog-CDnWpuli.js";import"./MenuTrigger-Cs0oQJbr.js";import"./CompositeItem-Bk-qRhF5.js";import"./ToolbarRootContext-CbtqnU-s.js";import"./getDisabledMountTransitionStyles-BveNZaSb.js";import"./getPseudoElementBounds-BxYk8t8e.js";import"./chevron-down-DjDYprbt.js";import"./index-BmVXlrb-.js";import"./error-venNczME.js";import"./BaseCbacBanner-DiJ5ZmWM.js";import"./makeExternalStore-C22ZFOyU.js";import"./Tooltip-jKH0Fw_X.js";import"./PopoverPopup-BEqbOZj_.js";import"./debounce-BteKW-AL.js";import"./useOsdkClient-CIFuIhFw.js";import"./tick-B3k5R_JT.js";import"./DropdownField-Cc2vtwzQ.js";import"./isEqual-0dZgA1V5.js";import"./withOsdkMetrics-8E7XigZV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
