import{j as i}from"./iframe-IwlSs7RL.js";import{O as p}from"./object-table-AK6fHNOe.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D5O8573A.js";import"./preload-helper-BSkCOlkQ.js";import"./Table-D6HHCJDL.js";import"./index-DubGe8n8.js";import"./Dialog-BBO-25m3.js";import"./cross-QYKhi7EM.js";import"./svgIconContainer-CxRFzvkj.js";import"./useBaseUiId-C6iBuDel.js";import"./InternalBackdrop-BWGQR3TW.js";import"./composite-BhDLSWJq.js";import"./index-Dtiq40Ku.js";import"./index-rVQQDG8n.js";import"./index-BEos1GHD.js";import"./useEventCallback-BemiPLPr.js";import"./SkeletonBar-BPC0qN3Q.js";import"./LoadingCell-Dc-t-6nm.js";import"./ColumnConfigDialog-lKzGqNSt.js";import"./DraggableList-CBvV7F9-.js";import"./search-B6kXKBbQ.js";import"./Input-DEK2jxOA.js";import"./useControlled-DHwVcrm_.js";import"./Button-v4BAXuzD.js";import"./small-cross-B6mridJu.js";import"./ActionButton-Y64s_uGz.js";import"./Checkbox-wH661C2t.js";import"./useValueChanged-CjTe9a5Y.js";import"./CollapsiblePanel-BNhx1-ML.js";import"./MultiColumnSortDialog-B6zldfza.js";import"./MenuTrigger-BDrTtgQd.js";import"./CompositeItem-Co7hhhjf.js";import"./ToolbarRootContext-C2NTNe0y.js";import"./getDisabledMountTransitionStyles-DW2b3ONx.js";import"./getPseudoElementBounds-x9ioFWs9.js";import"./chevron-down-DkOqeyC-.js";import"./index-Bu0grvIG.js";import"./error-IBUuPrgD.js";import"./BaseCbacBanner-Dfi6KiNH.js";import"./makeExternalStore-x7dSpV5j.js";import"./Tooltip-BgU0ufaQ.js";import"./PopoverPopup-CWcF5Zm_.js";import"./debounce-CwKNV3oF.js";import"./useOsdkClient-uiW7fCDT.js";import"./tick-Wvwlz1Gi.js";import"./DropdownField-Bilyp8Md.js";import"./isEqual-C45zizx2.js";import"./withOsdkMetrics-DC0QMqM3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
