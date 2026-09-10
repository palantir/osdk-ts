import{j as i}from"./iframe-BXr8Xp2f.js";import{O as p}from"./object-table-BMJGovFs.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BCJkNFvJ.js";import"./preload-helper-QMSJ2T2z.js";import"./Table-DAHfr45h.js";import"./index-Di1QXXOB.js";import"./Dialog-DNbVrmuy.js";import"./cross-BWStps-6.js";import"./svgIconContainer-DI5sy3Bm.js";import"./useBaseUiId-BnWXJnJX.js";import"./InternalBackdrop-BC2Mb0IP.js";import"./composite-DX-jTCFh.js";import"./index-B1TvT34D.js";import"./index-Bxr4aZil.js";import"./index-DklSHYVg.js";import"./useEventCallback-D_2naMiZ.js";import"./SkeletonBar-BerAdX9-.js";import"./LoadingCell-CnTJTekb.js";import"./ColumnConfigDialog-BxWiOWRh.js";import"./DraggableList-0ExabIJF.js";import"./search-zzPZfnCA.js";import"./Input-C5ZRCR8-.js";import"./useControlled-B8QMfPVX.js";import"./Button-C-QbecBZ.js";import"./small-cross-Bd1moWk7.js";import"./ActionButton-BUgkVL_1.js";import"./Checkbox-CBxZQIwt.js";import"./useValueChanged-91n4n7Az.js";import"./CollapsiblePanel-BcVKiAEP.js";import"./MultiColumnSortDialog-BnlhM_7b.js";import"./MenuTrigger-d7QkVKvu.js";import"./CompositeItem-4cSdCb7D.js";import"./ToolbarRootContext-CF3RFtFR.js";import"./getDisabledMountTransitionStyles-BMa-7_u5.js";import"./getPseudoElementBounds-x4SpAFDI.js";import"./chevron-down-IAwnATnI.js";import"./index-BratHID5.js";import"./error-CCe_KGjt.js";import"./BaseCbacBanner-BX2BB173.js";import"./makeExternalStore-BWoLV1uK.js";import"./Tooltip-CR0agNo_.js";import"./PopoverPopup-6Xu4OLUV.js";import"./debounce-C89iykon.js";import"./useOsdkClient-B7TJU7Dn.js";import"./tick-DbVcYKyy.js";import"./DropdownField-DdBf8ANg.js";import"./isEqual-Bov8yTSB.js";import"./withOsdkMetrics-D8QddkhH.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
