import{j as i}from"./iframe-CIbSoI7M.js";import{O as p}from"./object-table-CdpOGEYD.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BeX_3CYS.js";import"./preload-helper-DmH6FFG8.js";import"./Table-CL0AHU_v.js";import"./index-APCVJEW3.js";import"./Dialog-BDcSUddr.js";import"./cross-B4Gn6Z-M.js";import"./svgIconContainer-DcLu3MTp.js";import"./useBaseUiId-Bmq7BhRQ.js";import"./InternalBackdrop-BjgtFig0.js";import"./composite-CpNiXj_M.js";import"./index-CboshYjZ.js";import"./index-B_6MzMjy.js";import"./index-C3xT3GfP.js";import"./useEventCallback-BffX7Oxm.js";import"./SkeletonBar-C4i3ReRr.js";import"./LoadingCell-BIds3c2z.js";import"./ColumnConfigDialog-SXzUSwu7.js";import"./DraggableList-BHXP4rV_.js";import"./search-BkI_TfyS.js";import"./Input-BML0uaTR.js";import"./useControlled-B_hgmZPj.js";import"./isEqual-qGRkFMs-.js";import"./isObject-CjXE3_P0.js";import"./Button-B5W8gulZ.js";import"./ActionButton-BJZ859-j.js";import"./Checkbox-DOaIFBWt.js";import"./useValueChanged-BIcWN65t.js";import"./CollapsiblePanel-DUJM-fFs.js";import"./MultiColumnSortDialog-B7lgY-v3.js";import"./MenuTrigger-vAioYqMC.js";import"./CompositeItem-DObahPUf.js";import"./ToolbarRootContext-CxR7GEiJ.js";import"./getDisabledMountTransitionStyles-DYmaRG6n.js";import"./getPseudoElementBounds-BWWJ6sub.js";import"./chevron-down-C9wqxvOA.js";import"./index-CmzWklHf.js";import"./error-BMaUhajR.js";import"./BaseCbacBanner-BZNb6prg.js";import"./makeExternalStore-Db2RDoef.js";import"./Tooltip-Bm5iAyY8.js";import"./PopoverPopup-CYc0fInH.js";import"./toNumber-ClgHQQIk.js";import"./useOsdkClient-fg_a0RqO.js";import"./tick-BQndWl-G.js";import"./DropdownField-DYYRN_9K.js";import"./withOsdkMetrics-CgEO4G4q.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
