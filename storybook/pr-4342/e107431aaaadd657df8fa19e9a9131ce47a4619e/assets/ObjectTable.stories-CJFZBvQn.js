import{j as i}from"./iframe-BbZZXiGk.js";import{O as p}from"./object-table-BkL1V447.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BsXPsUuV.js";import"./preload-helper-CeJCQ8zy.js";import"./Table-GhUoiVcZ.js";import"./index-CZbf2fy9.js";import"./Dialog-0Rvjl7dG.js";import"./cross-CrdY7Kh8.js";import"./svgIconContainer-DdiK9vAR.js";import"./useBaseUiId-DJIunILb.js";import"./InternalBackdrop-Cbjv4LYd.js";import"./composite-DhB3hKwn.js";import"./index-D53mexCV.js";import"./index-Bz754pyr.js";import"./index-IygjZw6i.js";import"./useEventCallback-CuURf1p5.js";import"./SkeletonBar-gxgKc7X3.js";import"./LoadingCell-3dgNbREz.js";import"./ColumnConfigDialog-DtuJX_GE.js";import"./DraggableList-BW5a4ZJ4.js";import"./search-C7y_2xxv.js";import"./Input-Dg2k6Vdc.js";import"./useControlled-DQq0royT.js";import"./Button-is2LXBbi.js";import"./small-cross-DtcbYqVr.js";import"./ActionButton-23xZ25Q2.js";import"./Checkbox-Dz-CobTI.js";import"./useValueChanged-BK-w6RqQ.js";import"./CollapsiblePanel-CopIOFuI.js";import"./MultiColumnSortDialog-BZjrzObQ.js";import"./MenuTrigger-BPO1dH_z.js";import"./CompositeItem-Ond9knTH.js";import"./ToolbarRootContext-CLYVvxH8.js";import"./getDisabledMountTransitionStyles-D4i8pPNj.js";import"./getPseudoElementBounds-Cbzb4WBf.js";import"./chevron-down-1BEbhpzA.js";import"./index-DBQej_XT.js";import"./error-BZHgnJR4.js";import"./BaseCbacBanner-CcToPE2i.js";import"./makeExternalStore-DcV0xPVd.js";import"./Tooltip-B4XteE65.js";import"./PopoverPopup-DNp54wST.js";import"./debounce-CjaLM3Rn.js";import"./useOsdkClient-BfVtNRTC.js";import"./tick-C_vFiyHk.js";import"./DropdownField-v3cEN56r.js";import"./isEqual-Baat9Vrc.js";import"./withOsdkMetrics-D_eGSjjb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
