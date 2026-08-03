import{j as i}from"./iframe-BefR0BAx.js";import{O as p}from"./object-table-Cl1cxBhi.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DhBo_CFM.js";import"./preload-helper-D_muUgZZ.js";import"./Table-Bbsv4uan.js";import"./index-DI2v9xVU.js";import"./Dialog-D2CNWkJE.js";import"./cross-BihP7IYO.js";import"./svgIconContainer-CcaI0s95.js";import"./useBaseUiId-BnEhW10T.js";import"./InternalBackdrop-BaYjef9L.js";import"./composite-3yd-dfOO.js";import"./index-B0uyT0kH.js";import"./index-DHh2SPX3.js";import"./index-CmGKfrHw.js";import"./useEventCallback-RE9J9fb3.js";import"./SkeletonBar-BQEuDBTT.js";import"./LoadingCell-a1YjlDon.js";import"./ColumnConfigDialog-D8-Mz4_c.js";import"./DraggableList-8q3mEk2N.js";import"./search-BY8LPeq_.js";import"./Input-BgIQD_Ke.js";import"./useControlled-B0OAP1sO.js";import"./isEqual-DCCK4WBY.js";import"./isObject-DIUgRmYP.js";import"./Button-DI1B5wsL.js";import"./ActionButton-BTr_jfHn.js";import"./Checkbox-Dlu869_M.js";import"./useValueChanged-gDR6Oi3v.js";import"./CollapsiblePanel-DlAGvVsT.js";import"./MultiColumnSortDialog-B98AyuUx.js";import"./MenuTrigger-BG0GJahU.js";import"./CompositeItem-Bslbfoq2.js";import"./ToolbarRootContext-Bfg2cH-3.js";import"./getDisabledMountTransitionStyles-D-v5okLS.js";import"./getPseudoElementBounds-B_WYvVxH.js";import"./chevron-down-BfV0Otca.js";import"./index-CmoAwC0-.js";import"./error-DE1G-33b.js";import"./BaseCbacBanner-BMG75jme.js";import"./makeExternalStore-BWxrZDxx.js";import"./Tooltip-Dt-Twhia.js";import"./PopoverPopup-Bc50mxvp.js";import"./toNumber-4hosA8bD.js";import"./useOsdkClient-C3lcOu7D.js";import"./tick-CsCiMB1v.js";import"./DropdownField-CXf1ZULm.js";import"./withOsdkMetrics-BGhvxxIj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
