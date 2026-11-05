import{j as i}from"./iframe-vYbyM6ZV.js";import{O as p}from"./object-table-CTxoAf9I.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-k8830loC.js";import"./preload-helper-tlI1dOrD.js";import"./Table-9WAhGT43.js";import"./index-MNGJ9mHV.js";import"./Dialog-44SJ57MG.js";import"./cross-BEbCovKj.js";import"./svgIconContainer-DfARiMaj.js";import"./useBaseUiId-ByptStcX.js";import"./InternalBackdrop-DSD4DMxI.js";import"./composite-DaPRapKm.js";import"./index-D1tTu4S3.js";import"./index-CFPLyZ8s.js";import"./index-BnFHYNSY.js";import"./useEventCallback-BR6mcw5k.js";import"./SkeletonBar-BL8RDJ3t.js";import"./LoadingCell-BUvusmRL.js";import"./ColumnConfigDialog-CnrWIBhI.js";import"./DraggableList-CX-rHDv_.js";import"./search-Ci6nyrFb.js";import"./Input-B1kKyDDu.js";import"./useControlled-D5IPizVc.js";import"./Button-CkPI_2po.js";import"./small-cross-DI81dXVA.js";import"./ActionButton-DcwkvYtY.js";import"./Checkbox-BD1dSUeS.js";import"./useValueChanged-DKWqaoyN.js";import"./CollapsiblePanel-CocTkMtk.js";import"./MultiColumnSortDialog-B5nLuSPi.js";import"./MenuTrigger-B08jdsY5.js";import"./CompositeItem-D-60Q45b.js";import"./ToolbarRootContext-0aJ-Z7Lw.js";import"./getDisabledMountTransitionStyles-C65N2SkC.js";import"./getPseudoElementBounds-9yb0vIH6.js";import"./chevron-down-CCDvggT2.js";import"./index-BdDLYcYB.js";import"./error-bzzwZ2XW.js";import"./BaseCbacBanner-BXag0evl.js";import"./makeExternalStore-CEiL8mSF.js";import"./Tooltip-D32D5mnM.js";import"./PopoverPopup-SuAtAnXX.js";import"./debounce-ZlEARpZP.js";import"./useOsdkClient-B3gw6ZH8.js";import"./tick-BpFV42eT.js";import"./DropdownField-CEiBQEPL.js";import"./isEqual-6L5CvVx3.js";import"./withOsdkMetrics-BX5YNskQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
