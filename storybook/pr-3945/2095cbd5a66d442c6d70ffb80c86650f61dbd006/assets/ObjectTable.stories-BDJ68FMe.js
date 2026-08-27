import{j as i}from"./iframe-CymrrUap.js";import{O as p}from"./object-table-DsD5lCxR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-cL0WYTXP.js";import"./preload-helper-ehSUgiiL.js";import"./Table-BwyEzzA3.js";import"./index-DA-oUp9z.js";import"./Dialog-CXf9IXsT.js";import"./cross-D80OmHTw.js";import"./svgIconContainer-DmC2tGob.js";import"./useBaseUiId-DBVrwlNg.js";import"./InternalBackdrop-DptHKqPi.js";import"./composite-CPmOeLm-.js";import"./index-CkbGSZqd.js";import"./index-BMFjKR_h.js";import"./index-D-TCxA9c.js";import"./useEventCallback-Ca0PZb-I.js";import"./SkeletonBar-Cy3aWI1h.js";import"./LoadingCell-DrGS4_GQ.js";import"./ColumnConfigDialog-DXZYQVA8.js";import"./DraggableList-C5fTPmAd.js";import"./search-D73uP9Os.js";import"./Input-BVeDMVsS.js";import"./useControlled-F4dJPm4K.js";import"./Button-ZWSn3dX-.js";import"./small-cross-BXC0Eg3O.js";import"./ActionButton-CkEPzh79.js";import"./Checkbox-BKGwXbsb.js";import"./useValueChanged-CfWffDr4.js";import"./CollapsiblePanel-BjlGtYv0.js";import"./MultiColumnSortDialog-NMs-Rt6h.js";import"./MenuTrigger-DnF-czQE.js";import"./CompositeItem-Dj6qYNKV.js";import"./ToolbarRootContext-BsZ0cva1.js";import"./getDisabledMountTransitionStyles-Cqy5xLfF.js";import"./getPseudoElementBounds-Cwm_P-oB.js";import"./chevron-down-DOWVkS2T.js";import"./index-BNNz_fAv.js";import"./error-xVwU37JI.js";import"./BaseCbacBanner-BA1752Gq.js";import"./makeExternalStore-3pbdXedN.js";import"./Tooltip-DmacMCn7.js";import"./PopoverPopup-9VCLlEje.js";import"./debounce-D89nRWoA.js";import"./useOsdkClient-Cu-liJH6.js";import"./tick-HZRn0iiz.js";import"./DropdownField-D7TDTmE3.js";import"./isEqual-B-zNnBk1.js";import"./withOsdkMetrics-CA9bgf-6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
