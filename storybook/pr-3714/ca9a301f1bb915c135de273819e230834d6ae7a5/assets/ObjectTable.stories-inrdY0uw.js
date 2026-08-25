import{j as i}from"./iframe-Dyt1i0jF.js";import{O as p}from"./object-table-CMFe2Nx8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BVqExCfx.js";import"./preload-helper-CkXDm4BP.js";import"./Table-CMAD4Xlh.js";import"./index-DcAXBN3b.js";import"./Dialog-DcLnNXCl.js";import"./cross-S19HD2HE.js";import"./svgIconContainer-D-uDx2T6.js";import"./useBaseUiId-BY0MTYtv.js";import"./InternalBackdrop-Ct7y4f2I.js";import"./composite-BdidWOpb.js";import"./index-mVEsOtEX.js";import"./index-evf_4PQ0.js";import"./index-Clj96-VE.js";import"./useEventCallback-CaEhcjVd.js";import"./SkeletonBar-BaRQ4Qp6.js";import"./LoadingCell-BPNTvkVf.js";import"./ColumnConfigDialog-B47WoFq_.js";import"./DraggableList-Dz1QUu7w.js";import"./search-DVzPLhja.js";import"./Input-Z3F9W9iQ.js";import"./useControlled-DJki7VzO.js";import"./Button-BLyqJRhh.js";import"./small-cross-ChtsozyS.js";import"./ActionButton-0ZkWgmX4.js";import"./Checkbox-BwMT8DRf.js";import"./useValueChanged-JNg-bLTU.js";import"./CollapsiblePanel-Dt3zs3tt.js";import"./MultiColumnSortDialog-Yryx9cTC.js";import"./MenuTrigger-m2_9Nqzx.js";import"./CompositeItem-DJhVVbgA.js";import"./ToolbarRootContext-D-RVnupo.js";import"./getDisabledMountTransitionStyles-tYUqX_NC.js";import"./getPseudoElementBounds-JD4x0OwV.js";import"./chevron-down-w0huiaYQ.js";import"./index-C7QokEBW.js";import"./error-Op_HT_Tg.js";import"./BaseCbacBanner-C4qAY-7h.js";import"./makeExternalStore-tWIcELzA.js";import"./Tooltip-DWHz58xu.js";import"./PopoverPopup-B14CFIKt.js";import"./debounce-0m9xnR-i.js";import"./useOsdkClient-DXGvEoLq.js";import"./tick-jplCSaf2.js";import"./DropdownField-CyPoXxmJ.js";import"./isEqual-CY77IH_d.js";import"./withOsdkMetrics-5wv9ordD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
