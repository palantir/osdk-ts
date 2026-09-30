import{j as i}from"./iframe-BqOAaVYX.js";import{O as p}from"./object-table-CdmLVnB8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Du-lhB0A.js";import"./preload-helper-DfAqa6Ns.js";import"./Table-Bq7Setty.js";import"./index-hhMnxhy8.js";import"./Dialog-6ojF_tnN.js";import"./cross-VDw2oJTP.js";import"./svgIconContainer-fHQR-WGO.js";import"./useBaseUiId-D8PXSJwD.js";import"./InternalBackdrop-BGIegr0x.js";import"./composite-FQnt6Ug_.js";import"./index-D2HyYCxp.js";import"./index-W1jvd9mH.js";import"./index-BV9JiV1x.js";import"./useEventCallback-B27Rxp7L.js";import"./SkeletonBar-CCrdDLAf.js";import"./LoadingCell-Blv0eHPn.js";import"./ColumnConfigDialog-Dl6KswGg.js";import"./DraggableList-CpcAfN-E.js";import"./search-BrbOR0sP.js";import"./Input-DGoYfUS_.js";import"./useControlled-Cw0rstUZ.js";import"./Button-DLn-Tp2Y.js";import"./small-cross-Ce9UNZ-K.js";import"./ActionButton-yXrzzXD9.js";import"./Checkbox-Bh-5Xf3l.js";import"./useValueChanged-DoWuflaR.js";import"./CollapsiblePanel-BoQbvN_j.js";import"./MultiColumnSortDialog-BxyxFa4e.js";import"./MenuTrigger-Db7tR9a4.js";import"./CompositeItem-lsMfNC7P.js";import"./ToolbarRootContext-Db3ZHaqK.js";import"./getDisabledMountTransitionStyles-BkrhF4eN.js";import"./getPseudoElementBounds-vNNMy6F8.js";import"./chevron-down-CWxaKaem.js";import"./index-l3AZM9tW.js";import"./error-BmfSiLn5.js";import"./BaseCbacBanner-dHAnJqLD.js";import"./makeExternalStore-BiBaRYea.js";import"./Tooltip-Dg7ObhIp.js";import"./PopoverPopup-CpsJz6b_.js";import"./debounce-ZhhJhx1c.js";import"./useOsdkClient-tsebv1JW.js";import"./tick-CuisNnxV.js";import"./DropdownField-p3inN5wv.js";import"./isEqual-NGjzWzhK.js";import"./withOsdkMetrics-DCrwrvzV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
