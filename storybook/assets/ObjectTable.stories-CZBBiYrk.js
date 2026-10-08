import{j as i}from"./iframe-DnkZBU_s.js";import{O as p}from"./object-table-CGRqNSp7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C4DzpoUD.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BTqH_OzT.js";import"./index-Twl2Yec2.js";import"./Dialog-DZz-I4Yg.js";import"./cross-VJ1Xhfzd.js";import"./svgIconContainer-Q5pL_kyU.js";import"./useBaseUiId-zN2OIme-.js";import"./InternalBackdrop-qQYyo8Aq.js";import"./composite-C8UkqdZX.js";import"./index-e48OPfBl.js";import"./index-B-feRM5a.js";import"./index-D8RsbEg-.js";import"./useEventCallback-sPIyL2oh.js";import"./SkeletonBar-DThVILbx.js";import"./LoadingCell-CQwN2qo8.js";import"./ColumnConfigDialog-CE81TjDT.js";import"./DraggableList-ChOw6E8T.js";import"./search-Dr69VxcO.js";import"./Input-kebRx2SD.js";import"./useControlled-Bf8g-fcX.js";import"./Button-DhKykdrC.js";import"./small-cross-CovzpZRI.js";import"./ActionButton-Dy9qrhe6.js";import"./Checkbox-YF4J1gUw.js";import"./useValueChanged-CD6SQReb.js";import"./CollapsiblePanel-Cc6hsa-S.js";import"./MultiColumnSortDialog-CxgaCaFw.js";import"./MenuTrigger-CpSU6k-5.js";import"./CompositeItem-CnMbPbIm.js";import"./ToolbarRootContext-C8MimhOM.js";import"./getDisabledMountTransitionStyles-DG0BDKFw.js";import"./getPseudoElementBounds-Cyh96wJ4.js";import"./chevron-down-0w-qoQFW.js";import"./index-DxCMtj6T.js";import"./error-DnS223r_.js";import"./BaseCbacBanner-BoQhx0vv.js";import"./makeExternalStore-C3h3EPrK.js";import"./Tooltip-BNLJju5c.js";import"./PopoverPopup-bkZpgw0I.js";import"./debounce-BhxHqivV.js";import"./useOsdkClient-DsdDCC_g.js";import"./tick-D5_MceeO.js";import"./DropdownField-rO0m6kph.js";import"./isEqual-BjLkGY5Q.js";import"./withOsdkMetrics-CS0c_ats.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
