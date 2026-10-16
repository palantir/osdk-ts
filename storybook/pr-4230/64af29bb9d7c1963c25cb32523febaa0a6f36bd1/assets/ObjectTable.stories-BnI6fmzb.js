import{j as i}from"./iframe-DMhUx0Fg.js";import{O as p}from"./object-table-DE8fBGhj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DUTThEC5.js";import"./preload-helper-Cihlk8Ge.js";import"./Table-Da6cs4mT.js";import"./index-Cml4Y89r.js";import"./Dialog-BOq_zoJk.js";import"./cross-B04SzZ9a.js";import"./svgIconContainer-BbR8LDbO.js";import"./useBaseUiId-Cn1m1c-i.js";import"./InternalBackdrop-TfWeUkH5.js";import"./composite-ElTKsJn6.js";import"./index-BdVR8K9f.js";import"./index-DHMpAz6_.js";import"./index-DH75cEIM.js";import"./useEventCallback-D5w6D-ry.js";import"./SkeletonBar--G3RXL9q.js";import"./LoadingCell-BuMUQbHb.js";import"./ColumnConfigDialog-POJBQ206.js";import"./DraggableList-SAyA75P1.js";import"./search-BhCWHTId.js";import"./Input-CMBfU9Th.js";import"./useControlled-BnYANE82.js";import"./Button-BVqDK7_w.js";import"./small-cross-BYryOWLr.js";import"./ActionButton-BPaPgLh0.js";import"./Checkbox-DfpRBuKr.js";import"./useValueChanged-BVb2ZiR8.js";import"./CollapsiblePanel-soHfpF_t.js";import"./MultiColumnSortDialog-DW8NqDbb.js";import"./MenuTrigger-BtVXNuEq.js";import"./CompositeItem-CruspLcZ.js";import"./ToolbarRootContext-D6p48e5t.js";import"./getDisabledMountTransitionStyles-CtQRwei1.js";import"./getPseudoElementBounds-BUMieu6k.js";import"./chevron-down-DfsmE1o_.js";import"./index-Cg1qZyT8.js";import"./error-BGNhUAbf.js";import"./BaseCbacBanner-CwsDyiqo.js";import"./makeExternalStore-CWOCJrTj.js";import"./Tooltip-Bker_XsQ.js";import"./PopoverPopup-ve8SdMle.js";import"./debounce-BwonvSik.js";import"./useOsdkClient-DJ0k-ije.js";import"./tick-J71CIBzU.js";import"./DropdownField-ClZOcdQf.js";import"./isEqual-BqNMkLkS.js";import"./withOsdkMetrics-DGk-RlXg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
