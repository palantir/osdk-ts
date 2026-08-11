import{j as i}from"./iframe-BxC0rnVf.js";import{O as p}from"./object-table-BtjJwEQU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-9tDI72Fu.js";import"./preload-helper-CsqKNXT4.js";import"./Table-Cm_ZXCAG.js";import"./index-CB930e5x.js";import"./Dialog-CrdwlqVW.js";import"./cross-BpFLUEKb.js";import"./svgIconContainer-BuuNAr0U.js";import"./useBaseUiId-BRpjjaal.js";import"./InternalBackdrop-PILmt-GV.js";import"./composite-sAiFlK1Y.js";import"./index-Bdkgurn2.js";import"./index-FGHPo6lI.js";import"./index-D-NcnYmU.js";import"./useEventCallback-mLxVut11.js";import"./SkeletonBar-Bv-CCVUB.js";import"./LoadingCell-BKIjSPo4.js";import"./ColumnConfigDialog-CZ1m7UHv.js";import"./DraggableList-zdckpiAS.js";import"./search-BeNbtvpq.js";import"./Input-BynHcsMQ.js";import"./useControlled-DC01SbDU.js";import"./isEqual-lrapgCCQ.js";import"./isObject-ClysUrYf.js";import"./Button-BNu5fBU0.js";import"./ActionButton-Dd3qspII.js";import"./Checkbox-CbvmOXOW.js";import"./useValueChanged-hoJa7UO_.js";import"./CollapsiblePanel-BNDP3zSw.js";import"./MultiColumnSortDialog-DefXQB-g.js";import"./MenuTrigger-CRpAfNkz.js";import"./CompositeItem-DAic8xZX.js";import"./ToolbarRootContext-CX0irP5X.js";import"./getDisabledMountTransitionStyles-D4oIwPK9.js";import"./getPseudoElementBounds-DSBZWeu7.js";import"./chevron-down-BU_rocIF.js";import"./index-UDAhzYMP.js";import"./error-CKn6N_jF.js";import"./BaseCbacBanner-CtX7U5Ls.js";import"./makeExternalStore-DurDWx8y.js";import"./Tooltip-paEHixY4.js";import"./PopoverPopup-CfOUkERU.js";import"./toNumber-CqWtRKov.js";import"./useOsdkClient-DcDbgTWT.js";import"./tick-DFNHUkMm.js";import"./DropdownField-DIx8k6z5.js";import"./withOsdkMetrics-CS2XIluR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
