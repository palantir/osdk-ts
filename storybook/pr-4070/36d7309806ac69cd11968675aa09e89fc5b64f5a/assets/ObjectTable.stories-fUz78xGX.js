import{j as i}from"./iframe-CQcaQGvw.js";import{O as p}from"./object-table-DpmmZmB6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-COEwgiZO.js";import"./preload-helper-Bpr-Zbmh.js";import"./Table-CS63qZ4Y.js";import"./index-DEOxmfRe.js";import"./Dialog-D-oFZX2x.js";import"./cross-KHNb9CvK.js";import"./svgIconContainer-BlwZok7B.js";import"./useBaseUiId-VAYeRdVB.js";import"./InternalBackdrop-Dk9Ect_q.js";import"./composite-CIfh6Bad.js";import"./index-B-ZM_tXu.js";import"./index-B9xnj9RD.js";import"./index-Cybk3Ne2.js";import"./useEventCallback-CArEIpoN.js";import"./SkeletonBar-DwEmvlQd.js";import"./LoadingCell-w0AlfgOa.js";import"./ColumnConfigDialog-BwA-ArwO.js";import"./DraggableList-DcjcrWwB.js";import"./search-D2m2i9E6.js";import"./Input-9-R4IQfH.js";import"./useControlled-67ajb_bK.js";import"./Button-8-6PGj6n.js";import"./small-cross-CdN_p7Hi.js";import"./ActionButton-DflWWN5i.js";import"./Checkbox-CVnS3BL9.js";import"./useValueChanged-DbtSKH0N.js";import"./CollapsiblePanel-DYXFBbIc.js";import"./MultiColumnSortDialog-DyV5ZdCf.js";import"./MenuTrigger-BgDkquvz.js";import"./CompositeItem-C3IvhL6b.js";import"./ToolbarRootContext-BXhcIhdf.js";import"./getDisabledMountTransitionStyles-DWvIpLbT.js";import"./getPseudoElementBounds-CIy0YkKg.js";import"./chevron-down-B_FXfQYl.js";import"./index-BEjLsBGv.js";import"./error-CUpk6v7r.js";import"./BaseCbacBanner-DqU4exPy.js";import"./makeExternalStore-Ms4Ce4yr.js";import"./Tooltip-D_Sh4Nii.js";import"./PopoverPopup-G1jUpOgq.js";import"./debounce-DSy6HMAr.js";import"./useOsdkClient-BuGTS-D_.js";import"./tick-CvubQLo2.js";import"./DropdownField-Cvh6eOlG.js";import"./isEqual-B1uid1yF.js";import"./withOsdkMetrics-gr6PUNKA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
