import{j as i}from"./iframe-DWecEh6Z.js";import{O as p}from"./object-table-DAMoRfJu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DMcrTwMD.js";import"./preload-helper-Bbi2Z730.js";import"./Table-BQIL32i2.js";import"./index-6GDxt5zW.js";import"./Dialog-BTJHEOWb.js";import"./cross-DJ8vlukc.js";import"./svgIconContainer-CzZM0mPh.js";import"./useBaseUiId-DGtSF2d7.js";import"./InternalBackdrop-Dwui7Iwy.js";import"./composite-Dkoqcymr.js";import"./index-DwNzNK9a.js";import"./index-CgyINOqj.js";import"./index-D1u_zvAB.js";import"./useEventCallback-BnrirAaK.js";import"./SkeletonBar-BtmrMCoY.js";import"./LoadingCell-C2TXzPgY.js";import"./ColumnConfigDialog-DQxLvf4V.js";import"./DraggableList-Drxl4Ij8.js";import"./search-Dq1J9kTw.js";import"./Input-CalqcJQf.js";import"./useControlled-DxZ-cBby.js";import"./Button-Cipj2Ppc.js";import"./small-cross-CtR_-pfW.js";import"./ActionButton-BHq7nCiC.js";import"./Checkbox-gSoIZfAY.js";import"./useValueChanged-MajtV6Am.js";import"./CollapsiblePanel-DKsnYU-Y.js";import"./MultiColumnSortDialog-F5EwEeJC.js";import"./MenuTrigger-DQPZVbQo.js";import"./CompositeItem-K9AR25LJ.js";import"./ToolbarRootContext-D-1OWq12.js";import"./getDisabledMountTransitionStyles-DyI0iHRG.js";import"./getPseudoElementBounds-DnVQyjld.js";import"./chevron-down-C6k7Uas0.js";import"./index-B-5_Mr4U.js";import"./error-BHOwo5JQ.js";import"./BaseCbacBanner-DBe9XQkF.js";import"./makeExternalStore-BKGvKQz7.js";import"./Tooltip-CvzGGbpE.js";import"./isObject-4ImOr-SM.js";import"./debounce-BVhyQSqg.js";import"./useOsdkClient-BfFw3qSS.js";import"./tick-DrdvNN56.js";import"./DropdownField-CrXyCQrM.js";import"./isEqual-DnM3Sqmr.js";import"./_baseIsEqual-DJDOeQCT.js";import"./withOsdkMetrics-BTTMLJya.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
