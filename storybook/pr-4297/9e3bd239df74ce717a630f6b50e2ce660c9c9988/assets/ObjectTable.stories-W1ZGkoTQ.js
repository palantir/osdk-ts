import{j as i}from"./iframe-C8YzkEKz.js";import{O as p}from"./object-table-D7SdME4l.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CPx4erWg.js";import"./preload-helper-B8sJgEbx.js";import"./Table-C56OY43H.js";import"./index-C-Vxog0Y.js";import"./Dialog-2en1DzcI.js";import"./cross-CSu4FEcq.js";import"./svgIconContainer-_UKoevk1.js";import"./useBaseUiId-4XXFTLSd.js";import"./InternalBackdrop-dIKvouY1.js";import"./composite-DSkWtwuy.js";import"./index-Sammz_NI.js";import"./index-DWcboD_p.js";import"./index-CdSI9hhO.js";import"./useEventCallback-CCpgUzuf.js";import"./SkeletonBar-BWSmrnL_.js";import"./LoadingCell-Dm-PsAvU.js";import"./ColumnConfigDialog-CM8qN433.js";import"./DraggableList-DtsVu7l_.js";import"./search-0pSkbv3G.js";import"./Input-XPv58Dmh.js";import"./useControlled-CCblLEGd.js";import"./Button-XJjUiBNX.js";import"./small-cross-Dk2yMoi_.js";import"./ActionButton-Bcfn6CfF.js";import"./Checkbox-Jf59qoM_.js";import"./useValueChanged-DNAGv0cE.js";import"./CollapsiblePanel-DlES1K8I.js";import"./MultiColumnSortDialog-BhiK2rUk.js";import"./MenuTrigger-DeQjFEoy.js";import"./CompositeItem-CygnWs4n.js";import"./ToolbarRootContext-B7rZx-C2.js";import"./getDisabledMountTransitionStyles-Ck8jkMVH.js";import"./getPseudoElementBounds-DDudvtJw.js";import"./chevron-down-DAumFw1T.js";import"./index-DH0qhbVu.js";import"./error-C6Q2i6Lc.js";import"./BaseCbacBanner-B_fZmsKC.js";import"./makeExternalStore-DCdwwz1M.js";import"./Tooltip-DvVaVw7C.js";import"./PopoverPopup-LsEw6BHM.js";import"./debounce-B0L2FpgR.js";import"./useOsdkClient-vAKVtB8q.js";import"./tick-DweM-Z-r.js";import"./DropdownField-BCYfPW_3.js";import"./isEqual-ERStwv5y.js";import"./withOsdkMetrics-ClUT4fsQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
