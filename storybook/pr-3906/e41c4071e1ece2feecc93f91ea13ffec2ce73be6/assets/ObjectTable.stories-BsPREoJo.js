import{j as i}from"./iframe--rzYILY1.js";import{O as p}from"./object-table-DhSxpquq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DNGY5dFj.js";import"./preload-helper-BeoTkHdu.js";import"./Table-DzFFLjM0.js";import"./index-C7zR2UNJ.js";import"./Dialog-BVahHRiG.js";import"./cross-CbDoZw20.js";import"./svgIconContainer-rHUXuI_K.js";import"./useBaseUiId-CJzyL5xl.js";import"./InternalBackdrop-DDU6QN5T.js";import"./composite-wxEI6Gek.js";import"./index-IixAyX6d.js";import"./index-DyzOhDxu.js";import"./index-B3Acx7FQ.js";import"./useEventCallback-DAUsfFl7.js";import"./SkeletonBar-C39RVMey.js";import"./LoadingCell-DnjC92Iq.js";import"./ColumnConfigDialog-BEEILKec.js";import"./DraggableList-DGg6uage.js";import"./search-BOHaXQRv.js";import"./Input-W1UxkG5_.js";import"./useControlled-CUByo0YB.js";import"./Button-Ca6sgk7W.js";import"./small-cross-5IbrPY9A.js";import"./ActionButton-DTFvEc2Q.js";import"./Checkbox-DzZyj33f.js";import"./useValueChanged-wsSi2Sqr.js";import"./CollapsiblePanel-MeX8aOQH.js";import"./MultiColumnSortDialog-DThzHeGE.js";import"./MenuTrigger-DQgayqZX.js";import"./CompositeItem-CuUYeQr-.js";import"./ToolbarRootContext-DCiiiRyC.js";import"./getDisabledMountTransitionStyles-DeoJOC7z.js";import"./getPseudoElementBounds-C__B5H3K.js";import"./chevron-down-DC1AxXPK.js";import"./index-CcfXgpac.js";import"./error-DmzjCkkr.js";import"./BaseCbacBanner-DRymUDrU.js";import"./makeExternalStore-BhwDVCaS.js";import"./Tooltip-DF3tMF-r.js";import"./PopoverPopup-BEYDlEoP.js";import"./debounce-DDNrjhdG.js";import"./useOsdkClient-BXI2BlNL.js";import"./tick-BIPZUYbM.js";import"./DropdownField-CRtOla0p.js";import"./isEqual-DSsAKU2O.js";import"./withOsdkMetrics-BbSTbtS6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
