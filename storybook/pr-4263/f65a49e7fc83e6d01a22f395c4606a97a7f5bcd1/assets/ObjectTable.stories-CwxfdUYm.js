import{j as i}from"./iframe-BnIVPADF.js";import{O as p}from"./object-table-AVAMJlkk.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-QrzJlrdc.js";import"./preload-helper-D6GdL41X.js";import"./Table-Bja8lNV8.js";import"./index-DBHi4RbH.js";import"./Dialog-HSC9fHdB.js";import"./cross-DLlUDs4D.js";import"./svgIconContainer-gtMhd5mD.js";import"./useBaseUiId-BMj8ARX-.js";import"./InternalBackdrop-RqILjWGS.js";import"./composite-Ji9umu3K.js";import"./index-BKtQYF4d.js";import"./index-DwvcPf66.js";import"./index-CS2LLkKv.js";import"./useEventCallback-BxLA2qmi.js";import"./SkeletonBar-Bbzq-NrQ.js";import"./LoadingCell-CgWQDbs0.js";import"./ColumnConfigDialog-CPgTr-hR.js";import"./DraggableList-B-8CW1gW.js";import"./search-BssqF2mG.js";import"./Input-CKDCD_hI.js";import"./useControlled-DeFsLTJI.js";import"./Button-iaybQtEF.js";import"./small-cross-mjS1pjh5.js";import"./ActionButton-DG5xkgFq.js";import"./Checkbox-COG1rG6i.js";import"./useValueChanged-CoLs32Ul.js";import"./CollapsiblePanel-BX1PDtkn.js";import"./MultiColumnSortDialog-DzwjWAJ6.js";import"./MenuTrigger-BqlnCop4.js";import"./CompositeItem-B5UfOKT8.js";import"./ToolbarRootContext-Cc6jVzYJ.js";import"./getDisabledMountTransitionStyles-D3_ex1_k.js";import"./getPseudoElementBounds-D1dOJCQV.js";import"./chevron-down-B7znWhjE.js";import"./index-zynnMEX1.js";import"./error-BWHJsjpo.js";import"./BaseCbacBanner-CmDl6ZYR.js";import"./makeExternalStore-DEMjFRTS.js";import"./Tooltip-xJJqA6f0.js";import"./PopoverPopup-B1uyMBzM.js";import"./debounce-CTj_rgR5.js";import"./useOsdkClient-BTyq9ZHL.js";import"./tick-Cj8MZaAJ.js";import"./DropdownField-B4fxuMh9.js";import"./isEqual-oCSUY3kF.js";import"./withOsdkMetrics-B_v2aQKf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
