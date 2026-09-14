import{j as i}from"./iframe-Elh15CPO.js";import{O as p}from"./object-table-DmOwYA3a.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DWT0IyQp.js";import"./preload-helper-Df_Un8ev.js";import"./Table-CAK4NNbF.js";import"./index-DTYWX8Gd.js";import"./Dialog-CeSL8zDR.js";import"./cross-W2wOrtb4.js";import"./svgIconContainer-BzS94m4s.js";import"./useBaseUiId-DnwRjc07.js";import"./InternalBackdrop-DMjCkzTC.js";import"./composite-BSEtTnKL.js";import"./index-Doj8EHeU.js";import"./index-DPHcjEKY.js";import"./index-DWJg2tV_.js";import"./useEventCallback-DN9b37tD.js";import"./SkeletonBar-C40l-VqG.js";import"./LoadingCell-wEUeQ0dk.js";import"./ColumnConfigDialog-aE5C0mPI.js";import"./DraggableList-DCxwSfnC.js";import"./search-O3qV3BZP.js";import"./Input-C_Udp-5V.js";import"./useControlled-enifNsDV.js";import"./Button-D4CjXtEU.js";import"./small-cross-BRdYRDe1.js";import"./ActionButton-DAxrmY5m.js";import"./Checkbox-DFLi9i_0.js";import"./useValueChanged-CY4pDDqC.js";import"./CollapsiblePanel-BuwRJmVL.js";import"./MultiColumnSortDialog-BOZsKGUG.js";import"./MenuTrigger-Bo9Jct4u.js";import"./CompositeItem-CzwKTDvK.js";import"./ToolbarRootContext--FtOM0jf.js";import"./getDisabledMountTransitionStyles-BZhGmJyD.js";import"./getPseudoElementBounds-DHu47n9G.js";import"./chevron-down-vAkfWkS9.js";import"./index-B3O3SB4a.js";import"./error-B_1KE3-h.js";import"./BaseCbacBanner-B-e4n9MM.js";import"./makeExternalStore-DrH3viZo.js";import"./Tooltip-CDuc6-QX.js";import"./PopoverPopup-CmeyaCH5.js";import"./debounce-BkKFILxU.js";import"./useOsdkClient-CBxlc9T9.js";import"./tick-K9jJxqF2.js";import"./DropdownField-CL6X_FSf.js";import"./isEqual-BfoLWsoX.js";import"./withOsdkMetrics-SkuWgDWO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
