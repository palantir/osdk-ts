import{j as i}from"./iframe-DUz-OrqR.js";import{O as p}from"./object-table-w0417WkP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BdUQYHNP.js";import"./preload-helper-WEmf-dAi.js";import"./Table-C5BdWZ0N.js";import"./index-DPNIRnN8.js";import"./Dialog-CWBU6oUQ.js";import"./cross-CCEYas7q.js";import"./svgIconContainer-D7O_Fxw5.js";import"./useBaseUiId-faWN6al-.js";import"./InternalBackdrop-CdDLYcsS.js";import"./composite-5JSlF-Dr.js";import"./index-DYvQRBeB.js";import"./index-BiD7WpJZ.js";import"./index-qR442l2c.js";import"./useEventCallback-CxMtqjaM.js";import"./SkeletonBar-rNAt0bnX.js";import"./LoadingCell-BvcwRBBv.js";import"./ColumnConfigDialog-qGz8PZyw.js";import"./DraggableList-CvNJjWPn.js";import"./search-Bcz0i2pz.js";import"./Input-CbwTlgOh.js";import"./useControlled-CC5aVJEJ.js";import"./Button-CsUtrvR7.js";import"./small-cross-pWPsHnHo.js";import"./ActionButton-vQiUWj7m.js";import"./Checkbox-B3k8RFLk.js";import"./useValueChanged-B2lWda7M.js";import"./CollapsiblePanel-C8CGDA5F.js";import"./MultiColumnSortDialog-D7e9qUsI.js";import"./MenuTrigger-D34Pbt_d.js";import"./CompositeItem-C7hFkHG3.js";import"./ToolbarRootContext-BvHshB_C.js";import"./getDisabledMountTransitionStyles-JWaj6cbB.js";import"./getPseudoElementBounds-ckg5Ie2k.js";import"./chevron-down-b_QMdGXW.js";import"./index-BwuUX6bY.js";import"./error-DKqly0Za.js";import"./BaseCbacBanner-DNIMwCRS.js";import"./makeExternalStore-D6Z3VA3j.js";import"./Tooltip-5zdjkf3a.js";import"./PopoverPopup-BhZaHO9j.js";import"./debounce-tuaMCDN5.js";import"./useOsdkClient-BWsNL_Kz.js";import"./tick-Bni8E4-n.js";import"./DropdownField-RUWE0tyk.js";import"./isEqual-tNX8jUnb.js";import"./withOsdkMetrics-DJx9VGp_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
