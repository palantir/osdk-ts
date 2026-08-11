import{j as i}from"./iframe-CMTZ0fe1.js";import{O as p}from"./object-table-KzsxDKyC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CvD1ZY8s.js";import"./preload-helper-CcoQ00to.js";import"./Table-Bnsc0v89.js";import"./index-Bh2d44Ht.js";import"./Dialog-CVh1DPcK.js";import"./cross-DM_x2Wwt.js";import"./svgIconContainer-e3zlhnbG.js";import"./useBaseUiId-DzzDh8hf.js";import"./InternalBackdrop-1jqktKWZ.js";import"./composite-DZ5IyePu.js";import"./index-DLlFFsdj.js";import"./index-BAeLlemU.js";import"./index-DjIpGPbX.js";import"./useEventCallback-C8Wd_EE4.js";import"./SkeletonBar-Dw7JaR66.js";import"./LoadingCell-aoEJ-q9D.js";import"./ColumnConfigDialog-7frJ1pW2.js";import"./DraggableList-2l1aoXTT.js";import"./search-IoccQV4w.js";import"./Input-BDDU57H1.js";import"./useControlled-aZtd6HrX.js";import"./isEqual-hPXDcjsC.js";import"./isObject-DzEwnOmo.js";import"./Button-DNRqIdKS.js";import"./ActionButton-DdMAnRGf.js";import"./Checkbox-ZIYx-bNZ.js";import"./useValueChanged-CpNBPQAy.js";import"./CollapsiblePanel-D9kmoKty.js";import"./MultiColumnSortDialog-Dc5URj1l.js";import"./MenuTrigger-BujG9I8j.js";import"./CompositeItem-BO_EAHEP.js";import"./ToolbarRootContext-G1neddYV.js";import"./getDisabledMountTransitionStyles-fmppOIBL.js";import"./getPseudoElementBounds-D5ZzF8r2.js";import"./chevron-down-l0Ac3Xd0.js";import"./index-CjcSY54Z.js";import"./error-Cau1AwlP.js";import"./BaseCbacBanner-CAfSZuIq.js";import"./makeExternalStore-f8SczYn0.js";import"./Tooltip-zQ5Y_0XM.js";import"./PopoverPopup-CZz1h-u7.js";import"./toNumber-BD-Yxo2a.js";import"./useOsdkClient-fyW5LEUN.js";import"./tick-DX859i1S.js";import"./DropdownField-x8BNRTfX.js";import"./withOsdkMetrics-tRuzaAIK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
