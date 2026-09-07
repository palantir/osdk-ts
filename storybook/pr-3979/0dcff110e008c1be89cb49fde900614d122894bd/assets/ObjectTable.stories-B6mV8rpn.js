import{j as i}from"./iframe-vkoUEtx2.js";import{O as p}from"./object-table-D9bcFwrc.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DAykDIy6.js";import"./preload-helper-CY67mq_z.js";import"./Table-srNtWwan.js";import"./index-CnABB2cx.js";import"./Dialog-CFGI2PWi.js";import"./cross-DTB4NCzU.js";import"./svgIconContainer-CTvbg6Kf.js";import"./useBaseUiId-Cn9qEQr-.js";import"./InternalBackdrop-DvtCmbub.js";import"./composite-CNJa8zsy.js";import"./index-Cg_Ca4SJ.js";import"./index-CTa-81VF.js";import"./index-BzU6qHej.js";import"./useEventCallback-CxBnJXYy.js";import"./SkeletonBar-r9iUkffY.js";import"./LoadingCell-B6F1Eu1_.js";import"./ColumnConfigDialog-DTtwDBeO.js";import"./DraggableList-CvZhWeAl.js";import"./search-BJuRvFPW.js";import"./Input-DILwrgB_.js";import"./useControlled-BjJao8Of.js";import"./Button-yBKPIwwM.js";import"./small-cross-CEVVBQcQ.js";import"./ActionButton-DC04mOud.js";import"./Checkbox-C_r46pP6.js";import"./useValueChanged-BU9oYbVe.js";import"./CollapsiblePanel-DCq2pf_O.js";import"./MultiColumnSortDialog-BBluglFz.js";import"./MenuTrigger-CnwTa3Dw.js";import"./CompositeItem-B2YXnViz.js";import"./ToolbarRootContext-DG-oSyQ3.js";import"./getDisabledMountTransitionStyles-t_o23Sl1.js";import"./getPseudoElementBounds-DQfoju0G.js";import"./chevron-down-B0GhQ5QL.js";import"./index-CkB6dCmi.js";import"./error-WzD0MOfh.js";import"./BaseCbacBanner-DTwYXkXJ.js";import"./makeExternalStore-BZrOFzyq.js";import"./Tooltip-BP2G_ScW.js";import"./PopoverPopup-DmfHqgAT.js";import"./debounce-B3rNx3B-.js";import"./useOsdkClient-1czjWT3K.js";import"./tick-OUtJmbiv.js";import"./DropdownField-B5znI0v8.js";import"./isEqual-Ca1oPQqE.js";import"./withOsdkMetrics-1oalfrhO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
