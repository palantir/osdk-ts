import{j as i}from"./iframe-B-owY9Z7.js";import{O as p}from"./object-table-CefKw-8F.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CUmfde5E.js";import"./preload-helper-9dohNchO.js";import"./Table-D7Chhi4i.js";import"./index-B6FNdyul.js";import"./Dialog-DucCbSyW.js";import"./cross-DAeYv9DV.js";import"./svgIconContainer-SVfmpuZH.js";import"./useBaseUiId-BuygkMJa.js";import"./InternalBackdrop-Qs9WBPXA.js";import"./composite-CruT5ftQ.js";import"./index-D6Mlo6-X.js";import"./index-BLL9qzqo.js";import"./index-Bd9R8qyi.js";import"./useEventCallback-DEuppmtE.js";import"./SkeletonBar-Dt6LDg3E.js";import"./LoadingCell-D77Tuzfg.js";import"./ColumnConfigDialog-XbxNc6BS.js";import"./DraggableList-h04GfC5d.js";import"./search-CeJ8ph1L.js";import"./Input-DO0-uKR0.js";import"./useControlled-DU5wctnz.js";import"./Button-CdoyG0J5.js";import"./small-cross-6e-BgKCt.js";import"./ActionButton-BILzU60N.js";import"./Checkbox-DmR4JKqW.js";import"./useValueChanged-CKB_GaD4.js";import"./CollapsiblePanel-C-QRWB1j.js";import"./MultiColumnSortDialog-CmYfhF5I.js";import"./MenuTrigger-Q8tox6sB.js";import"./CompositeItem-Czc0ACb3.js";import"./ToolbarRootContext-PF-H9oB3.js";import"./getDisabledMountTransitionStyles-B2Uy8nCz.js";import"./getPseudoElementBounds-xcUg61qv.js";import"./chevron-down-KtY7GIs6.js";import"./index-CHVvDRh4.js";import"./error-BnApDvy6.js";import"./BaseCbacBanner-CN-44h_1.js";import"./makeExternalStore-DCMzogXn.js";import"./Tooltip-CSFV9ySu.js";import"./PopoverPopup-BP7HKGIF.js";import"./debounce-8Cu2Gz8K.js";import"./useOsdkClient-BO3W3UoD.js";import"./tick-DndUclkL.js";import"./DropdownField-Br6lY0cs.js";import"./isEqual-C7NIFCJ6.js";import"./withOsdkMetrics-D7Kd4RWC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
