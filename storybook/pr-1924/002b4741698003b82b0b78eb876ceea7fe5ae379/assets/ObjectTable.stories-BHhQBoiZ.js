import{j as i}from"./iframe-Ced8wIim.js";import{O as p}from"./object-table-CWR5TEG9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-7ZmxlJZ3.js";import"./preload-helper-BvnlfMzD.js";import"./Table-C9hx4b9U.js";import"./index-DwlP8Kq2.js";import"./Dialog-Bdr_MjQD.js";import"./cross-C1ezeDDh.js";import"./svgIconContainer-_H4YWiIz.js";import"./useBaseUiId-ZzsV-V0Z.js";import"./InternalBackdrop-BEW1kLJE.js";import"./composite-gyhDmABu.js";import"./index-LDJzIvQD.js";import"./index-Cm78izMo.js";import"./index-tRtnayVT.js";import"./useEventCallback-nDEIaijr.js";import"./SkeletonBar-EYFzh_lb.js";import"./LoadingCell-DPDDugg3.js";import"./ColumnConfigDialog-k7B7ez-f.js";import"./DraggableList-BtLLHXzb.js";import"./search-QSUOXDqi.js";import"./Input-KnIMm_iE.js";import"./useControlled-Bx5lxC0c.js";import"./Button-D2RSl0IU.js";import"./small-cross-CL1fxAVq.js";import"./ActionButton-DrbHFVEC.js";import"./Checkbox-DjpZNu9Z.js";import"./useValueChanged-KRQENGkA.js";import"./CollapsiblePanel-CcL0_Of9.js";import"./MultiColumnSortDialog-DqBVCBrx.js";import"./MenuTrigger-CxCj0ZGe.js";import"./CompositeItem-CKE15s8h.js";import"./ToolbarRootContext-BjCMra_B.js";import"./getDisabledMountTransitionStyles-BYykhR9M.js";import"./getPseudoElementBounds-FBWwExr3.js";import"./chevron-down-DpwNucWD.js";import"./index-mKFRvtOv.js";import"./error-yQjggD5T.js";import"./BaseCbacBanner-CNisjaH5.js";import"./makeExternalStore-Cb-8iveq.js";import"./Tooltip-DT2igpMI.js";import"./PopoverPopup-D6vxVy5_.js";import"./debounce-DSdlDxeH.js";import"./useOsdkClient-DWRmKvFn.js";import"./tick-DgJ5ryvj.js";import"./DropdownField-jydwoQac.js";import"./isEqual-pwdPx3XZ.js";import"./withOsdkMetrics-DKNE68LV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
