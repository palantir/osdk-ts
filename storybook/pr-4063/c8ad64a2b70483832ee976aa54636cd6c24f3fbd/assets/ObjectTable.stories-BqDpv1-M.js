import{j as i}from"./iframe-BMrwWMZ2.js";import{O as p}from"./object-table-XEkvxBmh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BdaOp89_.js";import"./preload-helper-DoFjuVNT.js";import"./Table-CRbvCevp.js";import"./index-B-70XFhu.js";import"./Dialog-BvuaZoDt.js";import"./cross-xNU9IbBp.js";import"./svgIconContainer-kz6kEcEQ.js";import"./useBaseUiId-CWfKm3xo.js";import"./InternalBackdrop-DBtObWvw.js";import"./composite-BaT2Rrgm.js";import"./index-CSBMmUL0.js";import"./index-p-n9-sXg.js";import"./index-BRQVA_3N.js";import"./useEventCallback-BSd1E5Q2.js";import"./SkeletonBar-C0kfolP9.js";import"./LoadingCell-BkA0PgxK.js";import"./ColumnConfigDialog-DRHnAQpP.js";import"./DraggableList-DgMFDC-A.js";import"./search-BhHSPRHE.js";import"./Input-BMTygJUG.js";import"./useControlled-D483ZYKr.js";import"./Button-WcPNJQ9X.js";import"./small-cross-BrwfsXlZ.js";import"./ActionButton-eMUnEcf2.js";import"./Checkbox-CFXTKEnV.js";import"./useValueChanged-BW2KTtVu.js";import"./CollapsiblePanel-oxSGc6n5.js";import"./MultiColumnSortDialog-BsmgrK-w.js";import"./MenuTrigger-CRUUqyTc.js";import"./CompositeItem-Cr7Wo-Nu.js";import"./ToolbarRootContext-yILvKIp4.js";import"./getDisabledMountTransitionStyles-XH-VCXpg.js";import"./getPseudoElementBounds-Bfv7yUkE.js";import"./chevron-down-Cm6BVMO0.js";import"./index-CE_tjB-k.js";import"./error-ZGBsqwOl.js";import"./BaseCbacBanner-Cf-BajoY.js";import"./makeExternalStore-CVWgtyr5.js";import"./Tooltip-DglXCpHI.js";import"./PopoverPopup-Cs8tAGg3.js";import"./debounce-CcyW07a2.js";import"./useOsdkClient-DG-loGVw.js";import"./tick-B5oTJlX2.js";import"./DropdownField-Bk7MJDj2.js";import"./isEqual-CXrRfqJW.js";import"./withOsdkMetrics-fvKzM9Fz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
