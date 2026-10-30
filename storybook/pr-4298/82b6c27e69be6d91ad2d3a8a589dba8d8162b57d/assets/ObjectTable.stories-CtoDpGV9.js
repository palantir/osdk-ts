import{j as i}from"./iframe-Hh4e2kUx.js";import{O as p}from"./object-table-Cr8llyem.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-JGKA4Mxl.js";import"./preload-helper-TOQk18-t.js";import"./Table-BUFKXz0A.js";import"./index-FPZnvji7.js";import"./Dialog-CPtTTYRM.js";import"./cross-B1QiScfw.js";import"./svgIconContainer-Cz0JOvaj.js";import"./useBaseUiId-DjrC8msS.js";import"./InternalBackdrop-BRLz5Oo7.js";import"./composite-Cp4pW4Qp.js";import"./index-B-WuXzkU.js";import"./index-DvHaYOI0.js";import"./index-BAn8m4dN.js";import"./useEventCallback-CgA-LA5D.js";import"./SkeletonBar-h8EAA6dT.js";import"./LoadingCell-MOjf46qh.js";import"./ColumnConfigDialog-D6vayJw6.js";import"./DraggableList-BK-MGJqw.js";import"./search-BdChkyLR.js";import"./Input-C0NV1hD9.js";import"./useControlled-DdhVK8TG.js";import"./Button-BeEw7oZA.js";import"./small-cross-BOMG33o5.js";import"./ActionButton-DBkLaJxS.js";import"./Checkbox-DhHh2I-I.js";import"./useValueChanged-DfM3tkSL.js";import"./CollapsiblePanel-CURvjbvA.js";import"./MultiColumnSortDialog-Cuh5KK1Y.js";import"./MenuTrigger-BI89sJPI.js";import"./CompositeItem-Cklqv3Ob.js";import"./ToolbarRootContext-C2gF6pit.js";import"./getDisabledMountTransitionStyles-CyyQe50a.js";import"./getPseudoElementBounds--QWVPd6g.js";import"./chevron-down-CYKjDF1m.js";import"./index-DrBWrzmN.js";import"./error-B0H5FIAQ.js";import"./BaseCbacBanner-bFzQlkvZ.js";import"./makeExternalStore-CPyLrlbT.js";import"./Tooltip-JRfON3Mb.js";import"./PopoverPopup-B5EBdm0I.js";import"./debounce-byZt61cr.js";import"./useOsdkClient-CewGTPBJ.js";import"./tick-DsV0GkZM.js";import"./DropdownField-DwXJ1LzE.js";import"./isEqual-5VleYkEv.js";import"./withOsdkMetrics-Da4KZg1t.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
