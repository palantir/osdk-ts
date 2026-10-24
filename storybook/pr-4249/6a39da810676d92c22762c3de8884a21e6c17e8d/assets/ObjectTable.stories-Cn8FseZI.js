import{j as i}from"./iframe-8pDs9AML.js";import{O as p}from"./object-table-sQi6A6Rl.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DY41K7Y_.js";import"./preload-helper-DR90AuyO.js";import"./Table-CStZcXay.js";import"./index-BgxF440z.js";import"./Dialog-C7GzHvnr.js";import"./cross-FlHZ6uvS.js";import"./svgIconContainer-BOUHKa6M.js";import"./useBaseUiId-Y2Bqc82V.js";import"./InternalBackdrop-DMqXw_ve.js";import"./composite-DXO-Xhg7.js";import"./index-gTFJVjv-.js";import"./index-DoNWJbFe.js";import"./useEventCallback-B_8pzo0G.js";import"./SkeletonBar-CuHnw5RE.js";import"./LoadingCell-DSA5FBAS.js";import"./ColumnConfigDialog-B5tce7iz.js";import"./DraggableList-DUNCFL58.js";import"./search-D5muLECQ.js";import"./Input-ClAW_50X.js";import"./useControlled-DjP6n15o.js";import"./Button-DIdY9EdX.js";import"./small-cross-DgbGi55m.js";import"./ActionButton-CIqGiuh_.js";import"./Checkbox-DFjGO5PY.js";import"./useValueChanged-CwdZzKW1.js";import"./CollapsiblePanel-CbmM2mnP.js";import"./MultiColumnSortDialog-DfNP_Ru7.js";import"./MenuTrigger-D_ErSUHZ.js";import"./CompositeItem-B2g2yaWL.js";import"./ToolbarRootContext-BlIr8usp.js";import"./getDisabledMountTransitionStyles-DqLgMH-z.js";import"./getPseudoElementBounds-C8btizZ2.js";import"./chevron-down-Be7tG24a.js";import"./index-BXm3f9eW.js";import"./error-HBrPbPXF.js";import"./BaseCbacBanner-CkXwAJ2q.js";import"./makeExternalStore-B6vEKUuF.js";import"./Tooltip-B6mBrT6t.js";import"./PopoverPopup-DVuRwmdG.js";import"./debounce-DeNQnw9V.js";import"./useOsdkClient-wRikYwpV.js";import"./tick-Bx8QqUf_.js";import"./DropdownField-DnQ0gVMB.js";import"./isEqual-D2vQtZmd.js";import"./withOsdkMetrics-QxEi4RWI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
