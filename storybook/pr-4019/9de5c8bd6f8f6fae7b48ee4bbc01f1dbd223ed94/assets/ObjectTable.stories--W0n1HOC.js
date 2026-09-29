import{j as i}from"./iframe-CrY1A4wu.js";import{O as p}from"./object-table-8BsQhbHw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DSe8DD2D.js";import"./preload-helper-BFzS6-eq.js";import"./Table-Jn9T8W_D.js";import"./index-BbE0G0zt.js";import"./Dialog-laDd6Dzp.js";import"./cross-CzBl0tbg.js";import"./svgIconContainer-B3_v06mI.js";import"./useBaseUiId-Cs8gIZmf.js";import"./InternalBackdrop-CNimJ3h4.js";import"./composite-AFOTQ2-F.js";import"./index-C3rJi8nM.js";import"./index-DV4D4tWk.js";import"./index-Dyb_oLLU.js";import"./useEventCallback-DaHbnggt.js";import"./SkeletonBar-DUpRMQqw.js";import"./LoadingCell-C8s-AWEb.js";import"./ColumnConfigDialog-_Ze5OvIi.js";import"./DraggableList-BA66imvX.js";import"./search-DZE4oD9r.js";import"./Input-DUtiftPz.js";import"./useControlled-BE-RLK2-.js";import"./Button-C9zZFhV6.js";import"./small-cross-B7ArTsa6.js";import"./ActionButton-BJz-dQ6B.js";import"./Checkbox-CiVl0Z7T.js";import"./useValueChanged-CKQn1SdE.js";import"./CollapsiblePanel-BO93Qs_h.js";import"./MultiColumnSortDialog-CwMfjrxh.js";import"./MenuTrigger-BybTnms_.js";import"./CompositeItem-51mDofen.js";import"./ToolbarRootContext-Coy-eXOe.js";import"./getDisabledMountTransitionStyles-B8Y0GomG.js";import"./getPseudoElementBounds-umYg5cKN.js";import"./chevron-down-Bu2NJksL.js";import"./index-CAMlkz_c.js";import"./error-CvnsbzcB.js";import"./BaseCbacBanner-D3Zdpqh2.js";import"./makeExternalStore-tkECEc_3.js";import"./Tooltip-Cijp_KA5.js";import"./PopoverPopup-CRSCUEqR.js";import"./debounce-D0SY6i1l.js";import"./useOsdkClient-EszrIw0T.js";import"./tick-hjmwYU-4.js";import"./DropdownField-r7GV--Zz.js";import"./isEqual-DCNAbXqK.js";import"./withOsdkMetrics-CHUgiBtf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
