import{j as i}from"./iframe-BbXT0DDw.js";import{O as p}from"./object-table-DyVg84mn.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-2ciI6YTZ.js";import"./preload-helper-eaV1mNfD.js";import"./Table-C_hSwjqG.js";import"./index-B2WF_Bz4.js";import"./Dialog-DxnoSr1H.js";import"./cross-DkAT-B8J.js";import"./svgIconContainer-CJjpcCkC.js";import"./useBaseUiId-D1Pe3AtR.js";import"./InternalBackdrop-wwPrzg68.js";import"./composite-BPu-b4cl.js";import"./index-CcSoWyRj.js";import"./index-DL1_iZ5Q.js";import"./index-BgpMFVad.js";import"./useEventCallback-CMoXdN8R.js";import"./SkeletonBar-D6wzzmti.js";import"./LoadingCell-BpNSEnvN.js";import"./ColumnConfigDialog-BJFjIqLN.js";import"./DraggableList-Cu105ekh.js";import"./search-Dbb95ii9.js";import"./Input-D1v8skGZ.js";import"./useControlled-C7P20UXk.js";import"./isEqual-B1jd_Lro.js";import"./isObject-CIEsB9pN.js";import"./Button-B2cJncoY.js";import"./ActionButton-CZYDa-34.js";import"./Checkbox-CTFOt7Kq.js";import"./useValueChanged-C3uOLpwW.js";import"./CollapsiblePanel-BxivYWMz.js";import"./MultiColumnSortDialog-07UE4H-p.js";import"./MenuTrigger-Dnfzzi-8.js";import"./CompositeItem-DvYz6hSy.js";import"./ToolbarRootContext-dJmq_z35.js";import"./getDisabledMountTransitionStyles-mdZnUNwd.js";import"./getPseudoElementBounds-D6vpj3ov.js";import"./chevron-down-DlzvZ4IU.js";import"./index-C-hobEV_.js";import"./error-CS7KmN1B.js";import"./BaseCbacBanner-CsXlomMy.js";import"./makeExternalStore-Bk59v3u3.js";import"./Tooltip-DguQTGZo.js";import"./PopoverPopup-X5uIZQx-.js";import"./toNumber-xbqrJNuR.js";import"./useOsdkClient-DKcQN8kf.js";import"./tick-BpQfSN9K.js";import"./DropdownField-Cvt8w-VI.js";import"./withOsdkMetrics-Cle2y2cZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
