import{j as i}from"./iframe-B9hGOcVW.js";import{O as p}from"./object-table-1qd0gbMo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-FTIGmVgP.js";import"./preload-helper-CEHJKNgD.js";import"./Table-BDWzuPuG.js";import"./index-WMs6XgHc.js";import"./Dialog-C7AaENM5.js";import"./cross-Kg25sWVz.js";import"./svgIconContainer-DJVhztLr.js";import"./useBaseUiId-Bv7mJDK-.js";import"./InternalBackdrop-CY5Sv-p0.js";import"./composite-BPGo720E.js";import"./index-DDiAWfcg.js";import"./index-C0zF1Hh-.js";import"./index-CLY61b3h.js";import"./useEventCallback-CRuXPfRQ.js";import"./SkeletonBar-DdBk-iAs.js";import"./LoadingCell-DMo5yi-9.js";import"./ColumnConfigDialog-CuHUO7sD.js";import"./DraggableList-72YsiWQv.js";import"./search-CIz89Kd0.js";import"./Input-DL4wCDaa.js";import"./useControlled-CuLTDJ7U.js";import"./Button-Kv95ZBq_.js";import"./small-cross-k_dWUzGn.js";import"./ActionButton-5hOfXxX5.js";import"./Checkbox-DmRWx-yX.js";import"./useValueChanged-BRgm995r.js";import"./CollapsiblePanel-BLpDHRNH.js";import"./MultiColumnSortDialog-CUeoMZUg.js";import"./MenuTrigger-D2PAdEJf.js";import"./CompositeItem-DJ_648IQ.js";import"./ToolbarRootContext-CI0oTBSQ.js";import"./getDisabledMountTransitionStyles-Btetjrhd.js";import"./getPseudoElementBounds-DoIsGQ2e.js";import"./chevron-down-cOiqTWha.js";import"./index-BOZqc1dp.js";import"./error-D0SwKHMs.js";import"./BaseCbacBanner-BK1b6COz.js";import"./makeExternalStore-X3bc05mq.js";import"./Tooltip-C5Zr6U13.js";import"./PopoverPopup-BOcc2TJb.js";import"./debounce-CzUX5qpY.js";import"./useOsdkClient-Dl6R5ARr.js";import"./tick-BCju8FEy.js";import"./DropdownField-DCxSSnaY.js";import"./isEqual-edacVGT3.js";import"./withOsdkMetrics-CgdP6FhV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
