import{j as i}from"./iframe-De32S9Ga.js";import{O as p}from"./object-table-ChT8KK-b.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DBLMCbCB.js";import"./preload-helper-CnslaRhg.js";import"./Table-DZ-kSNFz.js";import"./index-Bj_BwatX.js";import"./Dialog-fioS3KUB.js";import"./cross-pDSvbI93.js";import"./svgIconContainer-CTp6Tyc8.js";import"./useBaseUiId-CbRyPa0L.js";import"./InternalBackdrop-BbY0GFNt.js";import"./composite-CbztnelA.js";import"./index-BwFeGDU0.js";import"./index-l7crMfe1.js";import"./index-qO0EUS8_.js";import"./useEventCallback-CDpcFHyr.js";import"./SkeletonBar-BNgaVvZy.js";import"./LoadingCell-_YEnWc0D.js";import"./ColumnConfigDialog-ZFOXQSGd.js";import"./DraggableList-Bfiy6KBe.js";import"./search-098G78gK.js";import"./Input-CEDW6O3n.js";import"./useControlled-NYQbyv_q.js";import"./Button-BDZ6lJNh.js";import"./small-cross-4_JDj4E8.js";import"./ActionButton-ZEMUf8VA.js";import"./Checkbox-DCzYgN4M.js";import"./useValueChanged-DYPi3RG6.js";import"./CollapsiblePanel-COxUzOWS.js";import"./MultiColumnSortDialog-Dn58cXos.js";import"./MenuTrigger-2yPw1UT7.js";import"./CompositeItem-B2LPoskN.js";import"./ToolbarRootContext-CPpFxoM9.js";import"./getDisabledMountTransitionStyles-B3CIL9HP.js";import"./getPseudoElementBounds-nkhrr1nH.js";import"./chevron-down-J7S6Qe54.js";import"./index-B2HMeMAA.js";import"./error-hRM0SKX8.js";import"./BaseCbacBanner-BhFsAW3f.js";import"./makeExternalStore-DEaEiUV0.js";import"./Tooltip-oc-LvP8h.js";import"./PopoverPopup-B5EHLRyL.js";import"./debounce-DZ86C2fz.js";import"./useOsdkClient-DNhQtFKx.js";import"./tick-6GF1bhlu.js";import"./DropdownField-Tnp49b1X.js";import"./isEqual-FRRCTjN8.js";import"./withOsdkMetrics-IZ1C7wJE.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
