import{j as i}from"./iframe-DxxbQvQS.js";import{O as p}from"./object-table-CJ9J0DMr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ChIjw9fT.js";import"./preload-helper-BmW5a970.js";import"./Table-CnaCRFYx.js";import"./index-Cu-WR_G5.js";import"./Dialog-BsMxDY0C.js";import"./cross-D--1C_uR.js";import"./svgIconContainer-PZP2rkyO.js";import"./useBaseUiId-Brl8T8Kf.js";import"./InternalBackdrop-nw-0n2j_.js";import"./composite-C5YJt7dM.js";import"./index-mzAwx4l9.js";import"./index-CkYBlAD9.js";import"./index-vkezJOJG.js";import"./useEventCallback-CAdWC4ED.js";import"./SkeletonBar-BeU71Ayo.js";import"./LoadingCell-Bu2vJSgu.js";import"./ColumnConfigDialog-CSsvZjAE.js";import"./DraggableList-OtqLtn_q.js";import"./search-rJtEr32Y.js";import"./Input-CVhM1jds.js";import"./useControlled-CL6vvYza.js";import"./Button-BnqDmIMF.js";import"./small-cross-Dpw_vhgf.js";import"./ActionButton-Db9MAiVt.js";import"./Checkbox-BtXMD4Jt.js";import"./useValueChanged-DeuKFFlX.js";import"./CollapsiblePanel-CwmPk1HL.js";import"./MultiColumnSortDialog-BIZUu89Z.js";import"./MenuTrigger-BB9DnI0R.js";import"./CompositeItem-beHVPrKw.js";import"./ToolbarRootContext-9fMJDea1.js";import"./getDisabledMountTransitionStyles-CdcAqYKt.js";import"./getPseudoElementBounds-D5nG0WVt.js";import"./chevron-down-CCZd9VTh.js";import"./index-CI5AqopY.js";import"./error-ClKWsTpb.js";import"./BaseCbacBanner-DdIcsJYY.js";import"./makeExternalStore-SAYXMC44.js";import"./Tooltip-CQLTRANm.js";import"./PopoverPopup-B4xa-esw.js";import"./debounce-DCqgfrAu.js";import"./useOsdkClient-_f8xX1vc.js";import"./tick-DRGERfep.js";import"./DropdownField-DzabicEs.js";import"./isEqual-DjhR2rdN.js";import"./withOsdkMetrics-DJHuuWR4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
