import{j as i}from"./iframe-C6LjohtU.js";import{O as p}from"./object-table-CcAg2w7E.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D5RWxCDt.js";import"./preload-helper-GD_-jSvs.js";import"./Table-ilCXauHI.js";import"./index-Dl2NjNEw.js";import"./Dialog-BM8D0ZJA.js";import"./cross-DaW6OMzU.js";import"./svgIconContainer-B8ItPc1M.js";import"./useBaseUiId-Cap-PPpy.js";import"./InternalBackdrop-BsVUWCWG.js";import"./composite-BaoR0w31.js";import"./index-cI1ynK4N.js";import"./index-CDYomSyo.js";import"./index-B-dD1TvL.js";import"./useEventCallback-DxZxqDUd.js";import"./SkeletonBar-BeY9dT73.js";import"./LoadingCell-yc4sPZge.js";import"./ColumnConfigDialog-Bn8NyW4v.js";import"./DraggableList-BN5t2BlI.js";import"./search-mbcTQJkq.js";import"./Input-B249MGbk.js";import"./useControlled-BmDrUstA.js";import"./Button-PZls5hRh.js";import"./small-cross-BaK91MRB.js";import"./ActionButton-DwbrhZUk.js";import"./Checkbox-qJo_K2uT.js";import"./useValueChanged-W2WuQ5wK.js";import"./CollapsiblePanel-Cs_KG3mc.js";import"./MultiColumnSortDialog-Ct-qU7bQ.js";import"./MenuTrigger-BC5AyEgm.js";import"./CompositeItem-DAAqOuWb.js";import"./ToolbarRootContext-DXm6j23Z.js";import"./getDisabledMountTransitionStyles-BwmyyjtU.js";import"./getPseudoElementBounds-BQ5agBtb.js";import"./chevron-down-7dkGHUAP.js";import"./index--rDorTVG.js";import"./error-DQ-bOeSn.js";import"./BaseCbacBanner-DXERYCjt.js";import"./makeExternalStore-BQYgEbL5.js";import"./Tooltip-D1h-JVHm.js";import"./PopoverPopup-B0rRAlr0.js";import"./debounce-DIQiziXj.js";import"./useOsdkClient-D02NaCPv.js";import"./tick-AtbomG7h.js";import"./DropdownField-CaiM83zQ.js";import"./isEqual-fgbXcHh_.js";import"./withOsdkMetrics-DmxFMu7G.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
