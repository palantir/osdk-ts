import{j as i}from"./iframe-Chio77VP.js";import{O as p}from"./object-table-CiTAXoaP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DZFJncUi.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Dt5FNH5o.js";import"./index-Ca2LpqUZ.js";import"./Dialog-DqQTLStJ.js";import"./cross-DSLJTQ5w.js";import"./svgIconContainer-Csco7ptr.js";import"./useBaseUiId-ClFlSRoQ.js";import"./InternalBackdrop-ndglsXAe.js";import"./composite-DE8-mgXU.js";import"./index-BcgDg9yf.js";import"./index-DnMFWa6M.js";import"./index-CEEu1Ax6.js";import"./useEventCallback-B4Uu45dA.js";import"./SkeletonBar--R3A6M4c.js";import"./LoadingCell-BO2APzgK.js";import"./ColumnConfigDialog-5fVaKAOZ.js";import"./DraggableList-k5C9BzVf.js";import"./search-Bq_ERYnO.js";import"./Input-C-4igv96.js";import"./useControlled-C7GDl2B7.js";import"./Button-6EmhjClO.js";import"./small-cross-LZKNmLNK.js";import"./ActionButton-Bq1xmvFN.js";import"./Checkbox-D5wuzF_a.js";import"./useValueChanged-Oi-HM7VZ.js";import"./CollapsiblePanel-1ox7xPDd.js";import"./MultiColumnSortDialog-CiaGtBlu.js";import"./MenuTrigger-BXYr689C.js";import"./CompositeItem-Qz08TpRA.js";import"./ToolbarRootContext-CZQCk8Ol.js";import"./getDisabledMountTransitionStyles-CnbA4lIo.js";import"./getPseudoElementBounds-qSW1gYDZ.js";import"./chevron-down-D-UVCR2J.js";import"./index-CeDQ-Vdk.js";import"./error-Yn-rJTrJ.js";import"./BaseCbacBanner-CzPn9Ncu.js";import"./makeExternalStore-CTFx1LEB.js";import"./Tooltip-71Wdtc8K.js";import"./PopoverPopup-Ba-YatLV.js";import"./debounce-Ins44pUS.js";import"./useOsdkClient-DFUhHdMt.js";import"./tick-Db0tIP7m.js";import"./DropdownField-BOa15dWM.js";import"./isEqual-CrPAYksM.js";import"./withOsdkMetrics-Cz5B5mCa.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
