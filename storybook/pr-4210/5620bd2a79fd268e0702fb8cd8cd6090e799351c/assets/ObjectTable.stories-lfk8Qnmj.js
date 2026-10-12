import{j as i}from"./iframe-BONzVWWn.js";import{O as p}from"./object-table-BTps78ps.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-h6afejnO.js";import"./preload-helper-7aKcYg0W.js";import"./Table-BeFnIxMR.js";import"./index-CKzfCYwc.js";import"./Dialog-DauGg3hj.js";import"./cross-OaYSvrNf.js";import"./svgIconContainer-BsJGio94.js";import"./useBaseUiId-BJIDGoJB.js";import"./InternalBackdrop-BUyQj1vs.js";import"./composite-B6XHh7WQ.js";import"./index-BbYgoHFg.js";import"./index-D15FDZn2.js";import"./index-CYtGwXdQ.js";import"./useEventCallback-CoaVLJ5c.js";import"./SkeletonBar-BkSCBaCu.js";import"./LoadingCell-B-hF3TTr.js";import"./ColumnConfigDialog-Dsa3CjA5.js";import"./DraggableList-_ALp2hGB.js";import"./search-C37N2Xt5.js";import"./Input-XtFGCQpB.js";import"./useControlled-DfXv_ef9.js";import"./Button-BME0vzML.js";import"./small-cross-CGUVEOIr.js";import"./ActionButton-CC0XggjE.js";import"./Checkbox-HXoEtCq-.js";import"./useValueChanged-RFSTNB7h.js";import"./CollapsiblePanel-B6meFyIF.js";import"./MultiColumnSortDialog-CXRzSZdt.js";import"./MenuTrigger-Dob2KNO7.js";import"./CompositeItem-DSj43NsN.js";import"./ToolbarRootContext-BfDhsqcy.js";import"./getDisabledMountTransitionStyles-Csp7Nrn2.js";import"./getPseudoElementBounds-d8wmr9di.js";import"./chevron-down-BlXmNLUg.js";import"./index-oXf2-ktg.js";import"./error-DyHZRqpD.js";import"./BaseCbacBanner-BTLMeZE3.js";import"./makeExternalStore-B5wjJeG4.js";import"./Tooltip-CCQAgWFm.js";import"./PopoverPopup-B9VmNlSc.js";import"./debounce-CL8B4SFR.js";import"./useOsdkClient-BG5uKO_5.js";import"./tick-5KckzmGr.js";import"./DropdownField-Y6pZ3TyF.js";import"./isEqual-CNNu8GwX.js";import"./withOsdkMetrics-CJnYGCPE.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
