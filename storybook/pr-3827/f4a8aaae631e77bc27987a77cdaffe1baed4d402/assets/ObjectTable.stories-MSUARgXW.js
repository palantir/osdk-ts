import{j as i}from"./iframe-gEsDMi5m.js";import{O as p}from"./object-table-WOXcTE-C.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CH-SKMNc.js";import"./preload-helper-BAXfB12u.js";import"./Table-CEXYRF_J.js";import"./index-CYY6Rkvu.js";import"./Dialog-DAZ5iGgx.js";import"./cross-CApI6DkL.js";import"./svgIconContainer-me1vP-AK.js";import"./useBaseUiId-nOXd_pux.js";import"./InternalBackdrop-BU6W6YCn.js";import"./composite-CaWSGe7j.js";import"./index-CN74APF8.js";import"./index-CAdYCXPf.js";import"./index-n8Ri0MhW.js";import"./useEventCallback-BQHn974L.js";import"./SkeletonBar-BLp97GCo.js";import"./LoadingCell-D8gIru7I.js";import"./ColumnConfigDialog-BRkQ-tNM.js";import"./DraggableList-wBCEtgnC.js";import"./search-B644haYO.js";import"./Input-H1RJGFEs.js";import"./useControlled-G7jSLqSi.js";import"./isEqual-D9zzbew2.js";import"./isObject-BkpyQSqe.js";import"./Button-CAn4HIMi.js";import"./ActionButton-mczlm1qe.js";import"./Checkbox-CbOgMaWQ.js";import"./useValueChanged-BqgGQC4Z.js";import"./CollapsiblePanel-CqXCUz-t.js";import"./MultiColumnSortDialog-DGwhoAnv.js";import"./MenuTrigger-OdnTgWoD.js";import"./CompositeItem-D-qmf9CK.js";import"./ToolbarRootContext-k6OAp5FQ.js";import"./getDisabledMountTransitionStyles-CjAvwRuw.js";import"./getPseudoElementBounds-CqcGhrGg.js";import"./chevron-down-BmqaLTjs.js";import"./index-p-vwnn75.js";import"./error-CiVDGDzV.js";import"./BaseCbacBanner-BcjMpWny.js";import"./makeExternalStore-Dg55qf4I.js";import"./Tooltip-qZVOkPg3.js";import"./PopoverPopup-CMykBH5O.js";import"./toNumber-DLwRWhwE.js";import"./useOsdkClient-BZ8qdmVU.js";import"./tick-BQd7Ks22.js";import"./DropdownField-Bllgl6RO.js";import"./withOsdkMetrics-BRj5Yz7R.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
