import{j as i}from"./iframe-B_IZKh8P.js";import{O as p}from"./object-table-BHBx1xhg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-9DoOUHLY.js";import"./preload-helper-BSCxhMTJ.js";import"./Table-DWUB0BEu.js";import"./index-CnhyFb-r.js";import"./Dialog-Wm4jDDQn.js";import"./cross-hQMC7b3L.js";import"./svgIconContainer-Xsv1xEak.js";import"./useBaseUiId-Dr3xYZYx.js";import"./InternalBackdrop-CIvkvTEF.js";import"./composite-D9C4oNf8.js";import"./index-Cn6YA2O8.js";import"./index-CEu3xKdf.js";import"./index-Cz_FWict.js";import"./useEventCallback-psQhNNLf.js";import"./SkeletonBar-BOURZeYg.js";import"./LoadingCell-BsE1Vi6S.js";import"./ColumnConfigDialog-ByQeOPmB.js";import"./DraggableList-BkTfh7dw.js";import"./search-Bd9-hZh2.js";import"./Input-fcRS9Kmg.js";import"./useControlled-DNbx2H9c.js";import"./isEqual-CBO4YZX2.js";import"./isObject-BTbytGDT.js";import"./Button-BzbSQLjH.js";import"./ActionButton-DP2zPa-7.js";import"./Checkbox-hXQtnFKJ.js";import"./useValueChanged-DbQ39FoL.js";import"./CollapsiblePanel-BnA8neuU.js";import"./MultiColumnSortDialog-36rP3VXm.js";import"./MenuTrigger-5jncTReB.js";import"./CompositeItem-CFKw5_bq.js";import"./ToolbarRootContext-B8yBsSST.js";import"./getDisabledMountTransitionStyles-tSHMiDPJ.js";import"./getPseudoElementBounds-Bx5ztzSJ.js";import"./chevron-down-D7PGg54t.js";import"./index-C0Lj84kX.js";import"./error-SgZGkoCP.js";import"./BaseCbacBanner-CxEqfA_Y.js";import"./makeExternalStore-BAf1vw2Z.js";import"./Tooltip-Bepjyqd3.js";import"./PopoverPopup-BAI0fNYY.js";import"./toNumber-CZGRdJWc.js";import"./useOsdkClient-CKgeSwaI.js";import"./tick-B0vH2GvX.js";import"./DropdownField-DMPNyaBc.js";import"./withOsdkMetrics-Ch4rRkhY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
