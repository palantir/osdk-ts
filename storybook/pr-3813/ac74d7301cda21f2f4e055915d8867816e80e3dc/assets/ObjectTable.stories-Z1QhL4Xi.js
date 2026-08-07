import{j as i}from"./iframe-BN9OJAgN.js";import{O as p}from"./object-table-BtXg9Jt9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D8LRIbfn.js";import"./preload-helper-DTgW9lTk.js";import"./Table-Bm6ShkKY.js";import"./index-L-2VxvDT.js";import"./Dialog-BX2TIW55.js";import"./cross-ByA-dAnm.js";import"./svgIconContainer-hHjG4XJm.js";import"./useBaseUiId-CFnH6spW.js";import"./InternalBackdrop-C4trdGf5.js";import"./composite-B_FYTcr6.js";import"./index-XU0FUMPK.js";import"./index-BVudBLeJ.js";import"./index-CEvXZPz0.js";import"./useEventCallback--6m9_KS5.js";import"./SkeletonBar-C4QQNdI-.js";import"./LoadingCell-CCeFVwer.js";import"./ColumnConfigDialog-CjJ-0VBU.js";import"./DraggableList-616ntRZ-.js";import"./search-BpHAJh9z.js";import"./Input-BRu8vzsZ.js";import"./useControlled-CD4tqtci.js";import"./isEqual-DBlDHhPX.js";import"./isObject-BcXP8hna.js";import"./Button-DF2G5VEF.js";import"./ActionButton-ChDdKwqd.js";import"./Checkbox-tcCMRhRc.js";import"./useValueChanged-B2FQR58s.js";import"./CollapsiblePanel-DPsWFXth.js";import"./MultiColumnSortDialog-Bxpec3cA.js";import"./MenuTrigger-DyQXTKfV.js";import"./CompositeItem-3je88er8.js";import"./ToolbarRootContext-D9x68E4s.js";import"./getDisabledMountTransitionStyles-7a1Vlybt.js";import"./getPseudoElementBounds-DZodAcaj.js";import"./chevron-down-DEEy7cZJ.js";import"./index-BIb_aCOQ.js";import"./error-ViRMI7b4.js";import"./BaseCbacBanner-DkAgQMFT.js";import"./makeExternalStore-DH_VyjIn.js";import"./Tooltip-DNViEkQt.js";import"./PopoverPopup-DZCedgbo.js";import"./toNumber-4vsy98Eg.js";import"./useOsdkClient-DYpWW1q8.js";import"./tick-D_c2nCc1.js";import"./DropdownField-BEVlwcvm.js";import"./withOsdkMetrics-D2gdZo_l.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
