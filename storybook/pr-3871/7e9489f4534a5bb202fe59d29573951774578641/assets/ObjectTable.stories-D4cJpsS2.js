import{j as i}from"./iframe-CvIhuXi9.js";import{O as p}from"./object-table-SThaR-xf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BsAl_Htd.js";import"./preload-helper-ngrsZYi_.js";import"./Table-DqwHSnX7.js";import"./index-BWTVCJU3.js";import"./Dialog-oy8WyC4u.js";import"./cross-B5_Z7JKl.js";import"./svgIconContainer-CGfWhKh9.js";import"./useBaseUiId-DCKRG5Ce.js";import"./InternalBackdrop-CKKtHveH.js";import"./composite-CHb5-0xp.js";import"./index-00-WrU0n.js";import"./index-BBNVMWE6.js";import"./index-DxI2ZkoH.js";import"./useEventCallback-B9O9xLj2.js";import"./SkeletonBar-Dy3mLPU8.js";import"./LoadingCell-jcJC2Lrs.js";import"./ColumnConfigDialog-Cp0PlOtE.js";import"./DraggableList-C5fL1CCi.js";import"./search-CQcV4AtZ.js";import"./Input-OiIQcnvy.js";import"./useControlled-ChdRNV66.js";import"./Button-C6xashMw.js";import"./small-cross-qe6--zI-.js";import"./ActionButton-peYw1N6y.js";import"./Checkbox-CH6dtBYl.js";import"./useValueChanged-Dni45tCH.js";import"./CollapsiblePanel-e1vtouBN.js";import"./MultiColumnSortDialog-CCZLTeEY.js";import"./MenuTrigger-D-4sw_gb.js";import"./CompositeItem-gjyxrrR_.js";import"./ToolbarRootContext-ekWaHIpi.js";import"./getDisabledMountTransitionStyles-CZZecfwa.js";import"./getPseudoElementBounds-C0bxkF24.js";import"./chevron-down-Dj__g3dO.js";import"./index-MB-mmNCq.js";import"./error-CtnHAJul.js";import"./BaseCbacBanner-C-Gfu7nC.js";import"./makeExternalStore-vUi9AgyS.js";import"./Tooltip-BFAg5wCX.js";import"./PopoverPopup-DrlPZtKw.js";import"./debounce-BYyNOPxz.js";import"./useOsdkClient-Cn15GE-w.js";import"./tick-KWgeVH1V.js";import"./DropdownField-D6HVs40m.js";import"./isEqual-BJ-hxf23.js";import"./withOsdkMetrics-BC7K3rr_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
