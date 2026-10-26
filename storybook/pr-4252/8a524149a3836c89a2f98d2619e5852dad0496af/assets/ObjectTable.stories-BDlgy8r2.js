import{j as i}from"./iframe-CzgnuvEu.js";import{O as p}from"./object-table-DZE1yhi9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-gQzWulkd.js";import"./preload-helper-BOIiyEUV.js";import"./Table-C0r4YIFX.js";import"./index-DzE9qOqD.js";import"./Dialog-C6gIzk-X.js";import"./cross-BZ8qiqH7.js";import"./svgIconContainer-CqjF4WdJ.js";import"./useBaseUiId-BVmKyOEj.js";import"./InternalBackdrop-DI2I7eRR.js";import"./composite-DYp9sm2c.js";import"./index-CK7PizA2.js";import"./index-8D7uARHg.js";import"./index-pus3Iuu0.js";import"./useEventCallback-DP5etoNb.js";import"./SkeletonBar-tfdRWGle.js";import"./LoadingCell-BVnynEjd.js";import"./ColumnConfigDialog-CyH8mLNb.js";import"./DraggableList-DqCHPyso.js";import"./search-Cwa3Up2s.js";import"./Input-ZYnWFBEZ.js";import"./useControlled-C5aZuSIZ.js";import"./Button-NdiRMwUB.js";import"./small-cross-DSTYA1K8.js";import"./ActionButton-C6BBrtRh.js";import"./Checkbox-C0KN_mwH.js";import"./useValueChanged-CqEHKFBa.js";import"./CollapsiblePanel-O0DPlNmM.js";import"./MultiColumnSortDialog-B3d2ZrNN.js";import"./MenuTrigger-CT9JPRp9.js";import"./CompositeItem-D17OeXfK.js";import"./ToolbarRootContext-DRsejA9Q.js";import"./getDisabledMountTransitionStyles-DxBJ1NRq.js";import"./getPseudoElementBounds-Dyuhd565.js";import"./chevron-down-CcjtSJSE.js";import"./index-D4tXRR6m.js";import"./error-Dn-b8Fhc.js";import"./BaseCbacBanner-COsXYVNU.js";import"./makeExternalStore-b-3Eu4Hx.js";import"./Tooltip-B2E5uvSu.js";import"./PopoverPopup-Cftbj8pR.js";import"./debounce-DvL0klkp.js";import"./useOsdkClient-BHaXbtia.js";import"./tick-DwhgM6ss.js";import"./DropdownField-Bkj49_ok.js";import"./isEqual-BuQ-7_wX.js";import"./withOsdkMetrics-4RonxvLU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
