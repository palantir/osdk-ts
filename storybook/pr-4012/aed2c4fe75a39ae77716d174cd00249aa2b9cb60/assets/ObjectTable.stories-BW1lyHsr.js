import{j as i}from"./iframe-luQilSOF.js";import{O as p}from"./object-table-D_BqH1Hg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-I7cobbfM.js";import"./preload-helper-BKBqwCKh.js";import"./Table-BagWR1Ww.js";import"./index-Bz5LVora.js";import"./Dialog-Lv9F4OgU.js";import"./cross-dcAeg2cP.js";import"./svgIconContainer-Dg-z8JPf.js";import"./useBaseUiId-BIcPA1wg.js";import"./InternalBackdrop-CbMdhPVq.js";import"./composite-BqKU6h-l.js";import"./index-C2BPTamy.js";import"./index-CXosHwau.js";import"./index-BkNSozDa.js";import"./useEventCallback-Cac5EMzj.js";import"./SkeletonBar-DKdanr-N.js";import"./LoadingCell-DLmJphPR.js";import"./ColumnConfigDialog-CY95iwzL.js";import"./DraggableList-CF9NsHRJ.js";import"./search-B5llV8dS.js";import"./Input-BK5kzofZ.js";import"./useControlled-BcMtuVsI.js";import"./Button-CNpzMVry.js";import"./small-cross-DZFGtHrI.js";import"./ActionButton-BsMQ9zjV.js";import"./Checkbox-BZ25OhG5.js";import"./useValueChanged-sApPA-B_.js";import"./CollapsiblePanel-Dre8cIpY.js";import"./MultiColumnSortDialog-b-9uFQN3.js";import"./MenuTrigger-BjxfWAfx.js";import"./CompositeItem-5KLXQsnX.js";import"./ToolbarRootContext-iSsHGgjo.js";import"./getDisabledMountTransitionStyles-DuXtt4zv.js";import"./getPseudoElementBounds-DdBLUXDN.js";import"./chevron-down-DV7XSuWi.js";import"./index-BnFccNhI.js";import"./error-D7uvB3Tp.js";import"./BaseCbacBanner-BSCFDJYo.js";import"./makeExternalStore-D9PcNge9.js";import"./Tooltip-CDExLyRp.js";import"./PopoverPopup-B9ZyQpmI.js";import"./debounce-DhX6Egr1.js";import"./useOsdkClient-BsFMFNEo.js";import"./tick-D7ya3IWu.js";import"./DropdownField-CC2Dpk0A.js";import"./isEqual-DQb8zkzB.js";import"./withOsdkMetrics-CIz4zTAP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
