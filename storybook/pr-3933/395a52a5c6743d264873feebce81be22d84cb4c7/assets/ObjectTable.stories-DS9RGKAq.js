import{j as i}from"./iframe-rlv3mUdt.js";import{O as p}from"./object-table-COoiKLv3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CAdz_YdZ.js";import"./preload-helper-C8E9pHov.js";import"./Table-C05mHoNZ.js";import"./index-BwKgkhoJ.js";import"./Dialog-B2IC515a.js";import"./cross-cAPyHYLw.js";import"./svgIconContainer-BR20IK9W.js";import"./useBaseUiId-Dp7FKVfu.js";import"./InternalBackdrop-BVk7F7mw.js";import"./composite-cntM3euM.js";import"./index-DJ9-JExy.js";import"./index-BUfObnx_.js";import"./index-D6BXegGx.js";import"./useEventCallback-BFMrrB-m.js";import"./SkeletonBar-CBQRqDjl.js";import"./LoadingCell-vM5EQXcf.js";import"./ColumnConfigDialog-BKrlOu4J.js";import"./DraggableList-DaCSV-rj.js";import"./search-B6WH-E2J.js";import"./Input-DPtkjq4w.js";import"./useControlled-CsmgIjgz.js";import"./Button-DOX6KGuK.js";import"./small-cross-DtUNssPx.js";import"./ActionButton-fANDhFNh.js";import"./Checkbox-D4z1W9S5.js";import"./useValueChanged-BVFeiYrm.js";import"./CollapsiblePanel-DvRmCPuz.js";import"./MultiColumnSortDialog-DJAQcPH0.js";import"./MenuTrigger-zjnZIaoC.js";import"./CompositeItem-BwBfuGb4.js";import"./ToolbarRootContext-Dj6pA1B5.js";import"./getDisabledMountTransitionStyles-CKZngXvA.js";import"./getPseudoElementBounds-DBZ1MDoi.js";import"./chevron-down-ByAn-ifv.js";import"./index-Bj0ChkFd.js";import"./error-D3VLZxq_.js";import"./BaseCbacBanner-Cy5SHU8y.js";import"./makeExternalStore-B2qXKEyL.js";import"./Tooltip-DF5SsG7G.js";import"./PopoverPopup-CZ1Ki-Oj.js";import"./debounce-H1Lzwb9c.js";import"./useOsdkClient-2HxN2tp2.js";import"./tick-D7E73dGL.js";import"./DropdownField-pYTN63rb.js";import"./isEqual-ua0Q190L.js";import"./withOsdkMetrics-Bay5Qfh_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
