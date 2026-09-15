import{j as i}from"./iframe-BkUB1z-0.js";import{O as p}from"./object-table-B0QkY8pq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BU5zEsfv.js";import"./preload-helper-BCudyj9Z.js";import"./Table-D7nmPrIe.js";import"./index-BCGsaIlh.js";import"./Dialog-OQ_7fT6e.js";import"./cross-CTUau5h8.js";import"./svgIconContainer-CGIj3k_X.js";import"./useBaseUiId-B8T1UKcT.js";import"./InternalBackdrop-H5sSfb4n.js";import"./composite-DN3Oh5mU.js";import"./index-BQjDuZGx.js";import"./index-D6in26WZ.js";import"./index-CvdNlkb_.js";import"./useEventCallback-Cxr3bwfn.js";import"./SkeletonBar-CDJ42pSX.js";import"./LoadingCell-Bg2VT36p.js";import"./ColumnConfigDialog-CU0uQ1_j.js";import"./DraggableList-DG9sSi1E.js";import"./search-BtcHq1ld.js";import"./Input-C4TK9SWN.js";import"./useControlled-CUAQStBL.js";import"./Button-DSZL0uVg.js";import"./small-cross-BAPz52fQ.js";import"./ActionButton-9cqEoefe.js";import"./Checkbox-QYXnRQej.js";import"./useValueChanged-BT-2a7nr.js";import"./CollapsiblePanel-q_QI9iZH.js";import"./MultiColumnSortDialog-D_Gp9N_w.js";import"./MenuTrigger-DCv1PXh0.js";import"./CompositeItem-Bq1Yg5Uc.js";import"./ToolbarRootContext-But4UFVK.js";import"./getDisabledMountTransitionStyles-DT8C5L09.js";import"./getPseudoElementBounds-BRtlcmQu.js";import"./chevron-down-C-Az15Kw.js";import"./index-Cx3qLWLm.js";import"./error-yvAwMgsa.js";import"./BaseCbacBanner-Cjp0jT5t.js";import"./makeExternalStore-CT_-UtYV.js";import"./Tooltip-B4XqSu-L.js";import"./PopoverPopup-ozcNWDZ5.js";import"./debounce-BLWM42lG.js";import"./useOsdkClient-BbELsNFg.js";import"./tick-C2mVcAcj.js";import"./DropdownField-0exMnQkH.js";import"./isEqual-DS9l3kd2.js";import"./withOsdkMetrics-a2YFnMdP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
