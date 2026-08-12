import{j as i}from"./iframe-CASB9tDT.js";import{O as p}from"./object-table-BFB1azMa.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BoHwirKK.js";import"./preload-helper-BT4qy2DG.js";import"./Table-BlTt_xRt.js";import"./index-CaZjzwHl.js";import"./Dialog-Cwvfctts.js";import"./cross-BP6wgmXe.js";import"./svgIconContainer-D1NrwXBl.js";import"./useBaseUiId-CuUj_9P0.js";import"./InternalBackdrop-3KbW5bhi.js";import"./composite-CqdSrGVi.js";import"./index-DZkiBKN3.js";import"./index-SAn_G_wi.js";import"./index-quqksDWM.js";import"./useEventCallback-CbF17oj4.js";import"./SkeletonBar-BHscMRO0.js";import"./LoadingCell-B9WC_5s1.js";import"./ColumnConfigDialog-x-yNNTQb.js";import"./DraggableList-mPjKq5O9.js";import"./search-CfQ11krI.js";import"./Input-BW7gIe1E.js";import"./useControlled-DLW506J-.js";import"./isEqual-BtBzEQrf.js";import"./isObject-BlIY9m2I.js";import"./Button-BltQyjod.js";import"./ActionButton-DEKNXljN.js";import"./Checkbox-4jGkecAY.js";import"./useValueChanged-CaRDSGst.js";import"./CollapsiblePanel-Dl72Nyb5.js";import"./MultiColumnSortDialog-Buzy_vuM.js";import"./MenuTrigger-Q3VAWSQF.js";import"./CompositeItem-DTyFfYKq.js";import"./ToolbarRootContext-CqYiE2F9.js";import"./getDisabledMountTransitionStyles-CHPi5laV.js";import"./getPseudoElementBounds-DHd3hF1S.js";import"./chevron-down-B1bduZ3e.js";import"./index-6uAsZ-h5.js";import"./error-BrX8f-50.js";import"./BaseCbacBanner-Beigk8Y9.js";import"./makeExternalStore-BTh_nx7a.js";import"./Tooltip-CBVmdqZb.js";import"./PopoverPopup-DjMVUncd.js";import"./toNumber-s3UxQR4Z.js";import"./useOsdkClient-tq_rUodS.js";import"./tick-BZot9d_H.js";import"./DropdownField-DcpakKzL.js";import"./withOsdkMetrics-C77tE57v.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
