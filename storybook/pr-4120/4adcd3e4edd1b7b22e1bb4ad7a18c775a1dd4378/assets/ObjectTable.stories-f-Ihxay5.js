import{j as i}from"./iframe-BiMzIlPJ.js";import{O as p}from"./object-table-CCv-_1_a.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D6ywk25a.js";import"./preload-helper-dV0TeC0E.js";import"./Table-C1EvDWHO.js";import"./index-Dl3SZpx3.js";import"./Dialog-CUY8EJE8.js";import"./cross-BJNvpKNm.js";import"./svgIconContainer-CxWabZX-.js";import"./useBaseUiId-W_-oecTL.js";import"./InternalBackdrop-DhhF01_H.js";import"./composite-NMWOeRk3.js";import"./index-BipBLK98.js";import"./index-e-n3pUpE.js";import"./index-BOxfm3do.js";import"./useEventCallback-BZOG7Hba.js";import"./SkeletonBar-GDzcd7dh.js";import"./LoadingCell-Yb7MOHBb.js";import"./ColumnConfigDialog-BFHt28b8.js";import"./DraggableList-BzHFuVjE.js";import"./search-BuVLYo6z.js";import"./Input-Cn6g7mcN.js";import"./useControlled-545e9KB7.js";import"./Button-CQ2rKaZE.js";import"./small-cross-CcTfhdj4.js";import"./ActionButton-DphoRnh0.js";import"./Checkbox-BUA4g2ik.js";import"./useValueChanged-BmyiQTkB.js";import"./CollapsiblePanel-vr5w6FoC.js";import"./MultiColumnSortDialog-guC005qZ.js";import"./MenuTrigger-CoiXwjez.js";import"./CompositeItem-DZTQE9oi.js";import"./ToolbarRootContext-DLbFMlLJ.js";import"./getDisabledMountTransitionStyles-Co21QCNW.js";import"./getPseudoElementBounds-C_80eEsV.js";import"./chevron-down-Dj5P_Z4N.js";import"./index-Du_9BUOk.js";import"./error-BvyeXfc5.js";import"./BaseCbacBanner-BpqxrdVV.js";import"./makeExternalStore-C_oT62wU.js";import"./Tooltip-DCHj2uG-.js";import"./PopoverPopup-BAf_TSo2.js";import"./debounce-BQsIlRkA.js";import"./useOsdkClient-Il2EhGQ7.js";import"./tick-Dv1m_Fkz.js";import"./DropdownField-CfGoTJuL.js";import"./isEqual-CScgGPRW.js";import"./withOsdkMetrics-D6MPIy_f.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
