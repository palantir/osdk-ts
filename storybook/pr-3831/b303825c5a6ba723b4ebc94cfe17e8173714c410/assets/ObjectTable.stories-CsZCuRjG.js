import{j as i}from"./iframe-B3k6St_T.js";import{O as p}from"./object-table-Bu29mECu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BYYLFyxJ.js";import"./preload-helper-Bz3dVFdp.js";import"./Table-CDEsrxx0.js";import"./index-BvHXh5hH.js";import"./Dialog-BiHio090.js";import"./cross-DkN_e3qa.js";import"./svgIconContainer-CiJvVYR1.js";import"./useBaseUiId-CN4YGlgk.js";import"./InternalBackdrop-gL33YKiY.js";import"./composite-C_maXQ4a.js";import"./index-BOMAFt6Z.js";import"./index-DvV5NBUk.js";import"./index-CKFcz2T_.js";import"./useEventCallback-Yxia1zkB.js";import"./SkeletonBar-j7PuH9FN.js";import"./LoadingCell-RKZROzvJ.js";import"./ColumnConfigDialog-ddmYKID-.js";import"./DraggableList-8nnHB_Zu.js";import"./search-D1gWWYJX.js";import"./Input-CGzs6Mm3.js";import"./useControlled-DKV39VDG.js";import"./isEqual-w8i72UAZ.js";import"./isObject-Bl_L4n1V.js";import"./Button-CvyOEKt-.js";import"./ActionButton-1wJ96VeD.js";import"./Checkbox-BftSaVwY.js";import"./useValueChanged-DtsWOZvK.js";import"./CollapsiblePanel-DwSMhEAw.js";import"./MultiColumnSortDialog-IyVD_CMO.js";import"./MenuTrigger-Oyo3PTXg.js";import"./CompositeItem-C1S6KcsA.js";import"./ToolbarRootContext-C9TgeQ7l.js";import"./getDisabledMountTransitionStyles-DCt7ntxf.js";import"./getPseudoElementBounds-8Fl7H_Sb.js";import"./chevron-down-C7A59tL6.js";import"./index-D6Y2Irns.js";import"./error-D0JClcHo.js";import"./BaseCbacBanner-B6-usOnF.js";import"./makeExternalStore-CH1rZ3vr.js";import"./Tooltip-8qMs2j0L.js";import"./PopoverPopup-DnNn1J9U.js";import"./toNumber-wPhy8-WE.js";import"./useOsdkClient-Bmmq2OWY.js";import"./tick-qtTLf652.js";import"./DropdownField-CRNhBggS.js";import"./withOsdkMetrics-Da-HTJgY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
