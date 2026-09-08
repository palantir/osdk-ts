import{j as i}from"./iframe-BpAf1-YV.js";import{O as p}from"./object-table-CjeP2Wwp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-_Q2rE92O.js";import"./preload-helper-C7Ebqy80.js";import"./Table-BHcYIm7n.js";import"./index-DyADrv6I.js";import"./Dialog-Bgx40clP.js";import"./cross-DslNwA_6.js";import"./svgIconContainer-CFecCBjJ.js";import"./useBaseUiId-C9xAI1lW.js";import"./InternalBackdrop-DIkARFig.js";import"./composite-mAbXNXR7.js";import"./index-Cxw2yzFX.js";import"./index-DS78ICiY.js";import"./index-BFZzGMb_.js";import"./useEventCallback-BqMN4vsA.js";import"./SkeletonBar-C6BT11pg.js";import"./LoadingCell-Cz2ziAVE.js";import"./ColumnConfigDialog-CFa85xx3.js";import"./DraggableList-CYPEekzj.js";import"./search-DkdRXT-s.js";import"./Input-DIA1NCyo.js";import"./useControlled-Bq45AK2p.js";import"./Button-VTVCzMYN.js";import"./small-cross-CqAu1Ci1.js";import"./ActionButton-DoMyUIMJ.js";import"./Checkbox-DxQijG1K.js";import"./useValueChanged-D_9lOFp6.js";import"./CollapsiblePanel-CeD70irk.js";import"./MultiColumnSortDialog-CmYp3Npl.js";import"./MenuTrigger-D_8_evnU.js";import"./CompositeItem-DZ-wY7w2.js";import"./ToolbarRootContext-DFWsSTVD.js";import"./getDisabledMountTransitionStyles-DcnlFvvt.js";import"./getPseudoElementBounds-0BuLbpLW.js";import"./chevron-down-Bp5YSXdo.js";import"./index-CiUfMed7.js";import"./error-DZIXNDEl.js";import"./BaseCbacBanner-Ct2xvxEE.js";import"./makeExternalStore-B3qv40Vp.js";import"./Tooltip-BQ1GnDHa.js";import"./PopoverPopup-NJFXZyoo.js";import"./debounce-21KeODoP.js";import"./useOsdkClient-fGXuQFgJ.js";import"./tick-CPLVuGzH.js";import"./DropdownField-dB9KcLRA.js";import"./isEqual-CoUIWyeV.js";import"./withOsdkMetrics-6mq6wlfJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
