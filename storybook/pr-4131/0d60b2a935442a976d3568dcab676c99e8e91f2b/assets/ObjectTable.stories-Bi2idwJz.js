import{j as i}from"./iframe-youlX2De.js";import{O as p}from"./object-table-CZlqesvA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-IED6RsCJ.js";import"./preload-helper-DMj5aBc5.js";import"./Table-BUXNF9G6.js";import"./index-Dyy6V7kE.js";import"./Dialog-CEPS87HP.js";import"./cross-JeqqL3a9.js";import"./svgIconContainer-jpw1hIcy.js";import"./useBaseUiId-CNEu6f9Y.js";import"./InternalBackdrop-DrcATpaw.js";import"./composite-DF73ZPcS.js";import"./index-rZeAfKdB.js";import"./index-DQbJRRPB.js";import"./index-BKFOU1PI.js";import"./useEventCallback-CBEba5_p.js";import"./SkeletonBar-D9FqFwfd.js";import"./LoadingCell-BioKg3ey.js";import"./ColumnConfigDialog-BdeKS_jT.js";import"./DraggableList-CN91YWNw.js";import"./search-D5ZZMY1l.js";import"./Input-B5YU-z1C.js";import"./useControlled-DaSybbDg.js";import"./Button-CbOY6Chn.js";import"./small-cross-C88pqnLw.js";import"./ActionButton-B9nof7-y.js";import"./Checkbox-ALGSiDY-.js";import"./useValueChanged-CwfpjC1s.js";import"./CollapsiblePanel-DcdJjh9a.js";import"./MultiColumnSortDialog-Dquqxk1p.js";import"./MenuTrigger-Dt4-5A8f.js";import"./CompositeItem-Cml7HDGs.js";import"./ToolbarRootContext-CA4yJOZ7.js";import"./getDisabledMountTransitionStyles-CJj-Pq78.js";import"./getPseudoElementBounds-CGTU7rr0.js";import"./chevron-down-CmXpC65B.js";import"./index-wc1nMvwS.js";import"./error-BHWsO3Au.js";import"./BaseCbacBanner-DWHrmiV_.js";import"./makeExternalStore-qhtMEBHa.js";import"./Tooltip-DefV4BIS.js";import"./PopoverPopup-DhxeTh5N.js";import"./debounce-B4zD5peJ.js";import"./useOsdkClient-11CkZQ2p.js";import"./tick-DwbVRuy-.js";import"./DropdownField-DLS2xroO.js";import"./isEqual-Dc24nM2v.js";import"./withOsdkMetrics-BqmpDAQp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
