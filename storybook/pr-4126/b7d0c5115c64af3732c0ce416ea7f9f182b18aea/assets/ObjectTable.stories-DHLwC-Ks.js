import{j as i}from"./iframe-ByGhu7Rs.js";import{O as p}from"./object-table-UWXH19Rt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-OU9TaSJ-.js";import"./preload-helper-CovqUMwC.js";import"./Table-DPgHb55A.js";import"./index-D9CH1iu6.js";import"./Dialog-BozD2bDZ.js";import"./cross--Vb8zQ9y.js";import"./svgIconContainer-BM73F7-1.js";import"./useBaseUiId-BtV3BRGt.js";import"./InternalBackdrop-BZh54V-b.js";import"./composite-5pEQHoFG.js";import"./index-CSR_OQNU.js";import"./index-Sa0Sgq1C.js";import"./index-w0bHng9i.js";import"./useEventCallback-D3_oYaV2.js";import"./SkeletonBar-C48VFTJF.js";import"./LoadingCell-B7k1mu8o.js";import"./ColumnConfigDialog-Y5i0ZI6b.js";import"./DraggableList-C0OfMYfq.js";import"./search-CqZJJM3l.js";import"./Input-CPzfsq5Q.js";import"./useControlled-BMq25ryS.js";import"./Button-FdiR0YBj.js";import"./small-cross-DnaBmHYJ.js";import"./ActionButton-DeQetOWP.js";import"./Checkbox-CEre0Gw9.js";import"./useValueChanged-B31lb46w.js";import"./CollapsiblePanel-DKKHH52r.js";import"./MultiColumnSortDialog-UHh_3k7d.js";import"./MenuTrigger-BumYsrfX.js";import"./CompositeItem-DOTYC0vy.js";import"./ToolbarRootContext--ybsc-5r.js";import"./getDisabledMountTransitionStyles-NHd85YGu.js";import"./getPseudoElementBounds-wyGE4tZv.js";import"./chevron-down-CVFp5ZF3.js";import"./index-BhXiEem_.js";import"./error-BtdAILjI.js";import"./BaseCbacBanner-DaEullF4.js";import"./makeExternalStore-Bi9EmxuC.js";import"./Tooltip-C99_Q-RE.js";import"./PopoverPopup-CJYpnk7I.js";import"./debounce-DsqtKIvY.js";import"./useOsdkClient-WMaGmtpN.js";import"./tick-COxZ6M1z.js";import"./DropdownField-uya8Zzk7.js";import"./isEqual-SU-dZrhT.js";import"./withOsdkMetrics-Y0bjdApQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
